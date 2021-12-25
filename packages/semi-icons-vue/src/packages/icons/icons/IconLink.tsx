
    import {defineComponent, ref, h, onActivated} from 'vue'
    import { ConvertIcon, IconProps, vuePropsType as iconVuePropsType} from '../components/Icon';

    interface ExampleProps {
      name?: string
    }
    export const vuePropsType = {
      name: String
    }
    const SvgComponent = defineComponent<ExampleProps>((props, {slots}) => {
      return ()=>(
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
                d="M12.9393 2.9393C15.182 0.69666 18.818 0.696668 21.0606 2.93931C23.3033 5.18195 23.3033 8.81799 21.0606 11.0606L18.3925 13.7288C18.4631 13.3298 18.5 12.9192 18.5 12.5C18.5 11.5751 18.3206 10.6921 17.9947 9.88386L18.9393 8.93931C20.0104 7.86824 20.0104 6.13169 18.9393 5.06063C17.8682 3.98956 16.1317 3.98956 15.0606 5.06062L11.0606 9.06063C9.98956 10.1317 9.98956 11.8682 11.0606 12.9393C11.3265 13.2052 11.6335 13.4051 11.961 13.539L9.75848 15.7415C9.47 15.5439 9.19556 15.3169 8.9393 15.0606C6.69666 12.818 6.69666 9.18195 8.9393 6.93931L12.9393 2.9393ZM2.9393 12.9393L5.60751 10.2711C5.53685 10.6701 5.49999 11.0808 5.49999 11.5001C5.49999 12.4249 5.67935 13.3079 6.00519 14.1161L5.06062 15.0607C3.98956 16.1317 3.98956 17.8683 5.06063 18.9393C6.13169 20.0104 7.86824 20.0104 8.9393 18.9393L12.9393 14.9393C14.0104 13.8683 14.0104 12.1317 12.9393 11.0607C12.7664 10.8878 12.5762 10.7428 12.3743 10.6258L14.5302 8.46985C14.7141 8.61357 14.8914 8.77007 15.0606 8.93934C17.3033 11.182 17.3033 14.818 15.0606 17.0607L11.0606 21.0607C8.81798 23.3033 5.18194 23.3033 2.9393 21.0607C0.696665 18.818 0.696663 15.182 2.9393 12.9393Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>({
    name:'semi_icon-link',
    setup(props, {slots}){
      return ()=>
        <ConvertIcon iconType={'link'} {...props} >
          {{
            default:()=><SvgComponent/>
          }}
    </ConvertIcon>;
}})
IconComponent.props = iconVuePropsType
export default IconComponent
    