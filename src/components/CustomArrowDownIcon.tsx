import { Icon, IconProps } from "@chakra-ui/react";

const CustomArrowDownIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 46 44" stroke="#FFF" strokeWidth={2} {...props}>
      <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
    </Icon>
  );
};

export default CustomArrowDownIcon;
