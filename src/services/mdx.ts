import fs from "fs";
import { visit } from "unist-util-visit";
import { Node, Parent } from "unist";
import { getExtensionOfFilename } from "@/utils/file";

type Image = {
  type: string;
  url: string;
  alt: string;
};

export const transformImgSrc = ({
  slug,
  path,
}: {
  slug: string;
  path: string;
}) => {
  return (tree: Node) => {
    visit(tree, "paragraph", (node: Parent) => {
      const image = node.children.find(
        (child: { type: string }) => child.type === "image"
      ) as Image | undefined;

      if (image === undefined) return;

      const fileName = image.url.replace("./", "");
      const imageUrl = `${path}/${slug}/${fileName}`;
      const imageBuffer = fs.readFileSync(imageUrl);
      const base64String = imageBuffer.toString("base64");
      const extension = getExtensionOfFilename(fileName);
      image.url = `data:image/${extension};base64,${base64String}`;
    });
  };
};
