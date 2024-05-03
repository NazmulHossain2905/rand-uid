import { IOption } from "./interfaces";

export const randomUid = (options?: IOption) => {
  const {
    separator = "-",
    sectionLength = 5,
    totalSection = 5,
    prefix = "",
    variant = "mixed",
    charCase = "mixed",
  } = options || {};

  const sections: string[] = [];

  for (let i = 0; i < totalSection; i++) {
    let section: string = "";

    for (let j = 0; j < sectionLength; j++) {
      if (variant === "number") {
        const rand = Math.floor(Math.random() * 10);
        section += rand.toString(10);
      } else if (variant === "character") {
        const characters =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        section += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      } else {
        const characters =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        section += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
    }

    sections.push(section);
  }

  const randUid = sections.join(separator);

  let finalUid: string = "";

  if (prefix) {
    finalUid = `${prefix}${randUid}`;
  } else {
    finalUid = randUid;
  }

  if (charCase === "lower") {
    return finalUid.toLowerCase();
  } else if (charCase === "upper") {
    return finalUid.toUpperCase();
  } else {
    return finalUid;
  }
};
