//base
export type SvgProp = React.SVGProps<SVGSVGElement> & {};
export interface ChildrenProps {
  children?: React.ReactNode;
}
export interface OnClickProps {
  onClick?: (() => void) | undefined;
}

export interface ButtonProps {
  icon?: React.ReactNode;
  title?: string;
  type?: "Primary" | "Secondary";
}

export interface PricingSliderItemProps {
  title: string;
  price: string;
  description: string;
  color: "dark" | "light";
}

export interface testimonialSliderItemProps {
  color: "dark" | "light";
}
