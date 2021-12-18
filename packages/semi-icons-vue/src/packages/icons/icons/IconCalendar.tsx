
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
                d="M4 20V8H20V20H4ZM2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM6 10.5C6 10.2239 6.22386 10 6.5 10H8.5C8.77614 10 9 10.2239 9 10.5V12.5C9 12.7761 8.77614 13 8.5 13H6.5C6.22386 13 6 12.7761 6 12.5V10.5ZM6.5 15C6.22386 15 6 15.2239 6 15.5V17.5C6 17.7761 6.22386 18 6.5 18H8.5C8.77614 18 9 17.7761 9 17.5V15.5C9 15.2239 8.77614 15 8.5 15H6.5ZM10.5 10.5C10.5 10.2239 10.7239 10 11 10H13C13.2761 10 13.5 10.2239 13.5 10.5V12.5C13.5 12.7761 13.2761 13 13 13H11C10.7239 13 10.5 12.7761 10.5 12.5V10.5ZM11 15C10.7239 15 10.5 15.2239 10.5 15.5V17.5C10.5 17.7761 10.7239 18 11 18H13C13.2761 18 13.5 17.7761 13.5 17.5V15.5C13.5 15.2239 13.2761 15 13 15H11ZM15 10.5C15 10.2239 15.2239 10 15.5 10H17.5C17.7761 10 18 10.2239 18 10.5V12.5C18 12.7761 17.7761 13 17.5 13H15.5C15.2239 13 15 12.7761 15 12.5V10.5ZM15.5 15C15.2239 15 15 15.2239 15 15.5V17.5C15 17.7761 15.2239 18 15.5 18H17.5C17.7761 18 18 17.7761 18 17.5V15.5C18 15.2239 17.7761 15 17.5 15H15.5Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>((props, {slots}) => {
      return ()=>
        <ConvertIcon iconType={'calendar'} {...props} >
          {{
            default:()=><SvgComponent/>
          }}
    </ConvertIcon>;
})
IconComponent.props = iconVuePropsType
export default IconComponent
    