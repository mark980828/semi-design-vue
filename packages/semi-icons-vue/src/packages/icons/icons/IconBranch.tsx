
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
                d="M11 4.5C11 5.8962 10.1825 7.10145 9 7.66318V12.9823C11.1556 12.9254 13.034 12.712 14.4419 12.072C15.2602 11.7 15.8674 11.2045 16.2833 10.5401C16.3288 10.4674 16.3729 10.3913 16.4153 10.3117C15.5565 9.67385 15 8.65191 15 7.5C15 5.567 16.567 4 18.5 4C20.433 4 22 5.567 22 7.5C22 9.10497 20.9197 10.4576 19.4466 10.8705C19.2783 11.3195 19.0715 11.7399 18.8262 12.1318C18.039 13.3893 16.9275 14.2375 15.6834 14.8031C13.7175 15.6967 11.3028 15.9295 9 15.9844V16.3368C10.1825 16.8985 11 18.1038 11 19.5C11 21.433 9.433 23 7.5 23C5.567 23 4 21.433 4 19.5C4 18.1038 4.81753 16.8985 6 16.3368V7.66318C4.81753 7.10145 4 5.8962 4 4.5C4 2.567 5.567 1 7.5 1C9.433 1 11 2.567 11 4.5Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>((props, {slots}) => {
      return ()=>
        <ConvertIcon iconType={'branch'} {...props} >
          {{
            default:()=><SvgComponent/>
          }}
    </ConvertIcon>;
})
IconComponent.props = iconVuePropsType
export default IconComponent
    