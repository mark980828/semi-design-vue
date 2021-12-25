
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
                d="M10.5 2C5.80558 2 2 5.80558 2 10.5C2 15.1944 5.80558 19 10.5 19C12.3054 19 13.9794 18.4371 15.356 17.4773L19.4393 21.5606C20.0251 22.1464 20.9749 22.1464 21.5606 21.5606C22.1464 20.9749 22.1464 20.0251 21.5606 19.4393L17.4773 15.356C18.4371 13.9794 19 12.3054 19 10.5C19 5.80558 15.1944 2 10.5 2ZM5 10.5C5 7.46243 7.46243 5 10.5 5C13.5376 5 16 7.46243 16 10.5C16 13.5376 13.5376 16 10.5 16C7.46243 16 5 13.5376 5 10.5Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>({
    name:'semi_icon-search',
    setup(props, {slots}){
      return ()=>
        <ConvertIcon iconType={'search'} {...props} >
          {{
            default:()=><SvgComponent/>
          }}
    </ConvertIcon>;
}})
IconComponent.props = iconVuePropsType
export default IconComponent
    