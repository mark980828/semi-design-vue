
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
                d="M7 2.5C6.32236 2.5 5.56866 2.7129 5.04839 3.38182C4.59706 3.96211 4.52611 4.64108 4.51603 5.0745C4.5053 5.5361 4.56354 6.03541 4.61479 6.45112L4.64003 6.65403C4.68669 7.02732 4.72984 7.37252 4.75332 7.72478C4.81001 8.57511 4.71984 9.13489 4.47502 9.51325C4.27126 9.82815 3.76983 10.3034 2.28787 10.5151C1.54889 10.6206 1 11.2535 1 12C1 12.7465 1.54889 13.3794 2.28787 13.4849C3.76983 13.6966 4.27126 14.1719 4.47502 14.4868C4.71984 14.8651 4.81001 15.4249 4.75332 16.2752C4.72984 16.6275 4.68669 16.9727 4.64003 17.346L4.64003 17.346L4.61479 17.5489C4.56354 17.9646 4.5053 18.4639 4.51603 18.9255C4.52611 19.3589 4.59706 20.0379 5.04839 20.6182C5.56866 21.2871 6.32236 21.5 7 21.5H8.99999C9.82843 21.5 10.5 20.8284 10.5 20C10.5 19.1716 9.82798 18.5 8.99956 18.5H7.52923C7.54216 18.3406 7.56347 18.1494 7.59224 17.916L7.6149 17.7344C7.66138 17.364 7.7169 16.9215 7.74668 16.4748C7.81499 15.4501 7.78016 14.0724 6.99373 12.857C6.78897 12.5406 6.54696 12.255 6.26808 12C6.54696 11.745 6.78897 11.4594 6.99373 11.143C7.78016 9.92761 7.81499 8.54989 7.74668 7.52522C7.7169 7.0785 7.66138 6.63604 7.6149 6.2656L7.59224 6.08404C7.56347 5.85061 7.54216 5.65944 7.52923 5.5H9C9.82843 5.5 10.5 4.82843 10.5 4C10.5 3.17157 9.82798 2.5 8.99956 2.5H7ZM17 2.5C17.6776 2.5 18.4313 2.7129 18.9516 3.38182C19.4029 3.96211 19.4739 4.64108 19.484 5.0745C19.4947 5.5361 19.4365 6.03541 19.3852 6.45112L19.36 6.65403L19.36 6.65412C19.3133 7.02738 19.2702 7.37255 19.2467 7.72478C19.19 8.57511 19.2802 9.13489 19.525 9.51325C19.7287 9.82815 20.2302 10.3034 21.7121 10.5151C22.4511 10.6206 23 11.2535 23 12C23 12.7465 22.4511 13.3794 21.7121 13.4849C20.2302 13.6966 19.7287 14.1719 19.525 14.4868C19.2802 14.8651 19.19 15.4249 19.2467 16.2752C19.2702 16.6275 19.3133 16.9726 19.36 17.3459L19.36 17.346L19.3852 17.5489C19.4365 17.9646 19.4947 18.4639 19.484 18.9255C19.4739 19.3589 19.4029 20.0379 18.9516 20.6182C18.4313 21.2871 17.6776 21.5 17 21.5H15C14.1716 21.5 13.5 20.8284 13.5 20C13.5 19.1716 14.172 18.5 15.0004 18.5H16.4708C16.4578 18.3406 16.4365 18.1494 16.4078 17.916L16.3851 17.7344C16.3386 17.364 16.2831 16.9215 16.2533 16.4748C16.185 15.4501 16.2198 14.0724 17.0063 12.857C17.211 12.5406 17.453 12.255 17.7319 12C17.453 11.745 17.211 11.4594 17.0063 11.143C16.2198 9.92761 16.185 8.54989 16.2533 7.52522C16.2831 7.0785 16.3386 6.63604 16.3851 6.2656L16.4078 6.08404C16.4365 5.85061 16.4578 5.65944 16.4708 5.5H15C14.1716 5.5 13.5 4.82843 13.5 4C13.5 3.17157 14.172 2.5 15.0004 2.5H17Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>((props, {slots}) => {
      return ()=>
        <ConvertIcon iconType={'brackets'} {...props} >
          {{
            default:()=><SvgComponent/>
          }}
    </ConvertIcon>;
})
IconComponent.props = iconVuePropsType
export default IconComponent
    