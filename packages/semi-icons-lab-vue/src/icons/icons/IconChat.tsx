import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, vuePropsType as iconVuePropsType } from '../components/Icon';
import type { IconProps } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
  return () => (
    <svg
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      // @ts-ignore
            focusable={false}
      aria-hidden={true}
      {...props}
    >
      <path
        d="M18 5C18 3.89543 17.1046 3 16 3H2C0.89543 3 0 3.89543 0 5V17.5858C0 18.4767 1.07714 18.9229 1.70711 18.2929L3.41421 16.5858C3.78929 16.2107 4.29799 16 4.82843 16H16C17.1046 16 18 15.1046 18 14V5Z"
        fill="#DFDFE7"
      />
      <path
        d="M4 2C4 0.89543 4.89543 0 6 0H20C21.1046 0 22 0.895431 22 2V14.5858C22 15.4767 20.9229 15.9229 20.2929 15.2929L18.5858 13.5858C18.2107 13.2107 17.702 13 17.1716 13H6C4.89543 13 4 12.1046 4 11V2Z"
        fill="#49C4FD"
      />
      <rect x={14} y={2.5} width={4} height={1.5} fill="#F4CE2D" />
      <rect x={8} y={8.5} width={10} height={1.5} fill="#F9FCFF" />
      <rect x={8} y={5.5} width={10} height={1.5} fill="#F9FCFF" />
    </svg>
  );
});
const IconComponent = defineComponent<IconProps>({
  name: 'IconChat',
  setup(props, { slots }) {
    return () => (
      <ConvertIcon iconType={'chat'} {...props}>
        {{
          default: () => <SvgComponent />,
        }}
      </ConvertIcon>
    );
  },
});
IconComponent.props = iconVuePropsType;
export default IconComponent;
export { SvgComponent };
