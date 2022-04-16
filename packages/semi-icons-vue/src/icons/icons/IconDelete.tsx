import { defineComponent, ref, h, onActivated } from 'vue';
import { ConvertIcon, IconProps, vuePropsType as iconVuePropsType } from '../components/Icon';
const SvgComponent = defineComponent((props, { slots }) => {
    return () => (
        <svg
            viewBox="0 0 24 24"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.38055 2C9.00251 2 8.65678 2.21319 8.48703 2.55098L7.00505 5.5H3C2.44772 5.5 2 5.94772 2 6.5V7.5C2 8.05228 2.44772 8.5 3 8.5H21C21.5523 8.5 22 8.05228 22 7.5V6.5C22 5.94772 21.5523 5.5 21 5.5H16.9949L15.5129 2.55098C15.3432 2.21319 14.9975 2 14.6194 2H9.38055ZM14.8571 5.5L14.1439 4.25193C14.0549 4.09614 13.8893 4 13.7098 4H10.2901C10.1107 4 9.94505 4.09614 9.85602 4.25193L9.14284 5.5H14.8571ZM18.7192 10H5.28078C4.6302 10 4.15285 10.6114 4.31063 11.2425L6.4319 19.7276C6.76578 21.0631 7.96573 22 9.34233 22H14.6577C16.0343 22 17.2342 21.0631 17.5681 19.7276L19.6894 11.2425C19.8472 10.6114 19.3698 10 18.7192 10Z"
                fill="currentColor"
            />
        </svg>
    );
});
const IconComponent = defineComponent<IconProps>({
    name: 'IconDelete',

    setup(props, { slots }) {
        return () => (
            <ConvertIcon iconType={'activity'} {...props}>
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
