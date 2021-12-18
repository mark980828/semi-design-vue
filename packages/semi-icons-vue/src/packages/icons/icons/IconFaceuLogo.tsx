
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
                d="M12 22.1194C18.3082 22.1194 23 18.6933 23 13.606C23 10.0836 20.7685 5.76779 15.9491 4.22156C15.9568 4.17927 15.9711 4.12053 15.9885 4.04893C16.0408 3.83388 16.1213 3.50288 16.1357 3.15356C16.1359 3.14971 16.136 3.14587 16.1362 3.14204C16.1403 3.07981 16.1414 3.0192 16.1389 2.96144C16.1338 2.61104 16.0578 2.39042 15.81 2.28879C15.1689 1.79293 13.6821 2.00494 12.1085 2.40466C8.1827 3.40129 6.07594 4.9362 5.33346 5.56802C2.46852 7.53485 1 10.6989 1 13.606C1 18.6933 5.69185 22.1194 12 22.1194ZM11.5845 14.5776H12.7132C13.1073 14.5776 13.138 15.0224 12.9438 15.4536C12.8687 15.6203 12.8197 15.736 12.7818 15.8255C12.6947 16.0311 12.6662 16.0983 12.514 16.3281C12.2106 16.7872 11.798 16.4752 11.7016 16.3067C11.4817 15.9226 11.2825 15.4422 11.2825 15.4422C11.2825 15.4422 10.8335 14.5776 11.5845 14.5776ZM5.81464 9.15901C8.0342 9.2047 9.13292 11.0273 9.13292 13.334C9.13292 15.6406 8.01635 17.4783 5.80393 17.4783C3.54225 17.4783 2.51421 15.6085 2.51421 13.3019C2.51421 10.9952 3.72858 9.11617 5.81464 9.15901ZM18.2332 9.15901C20.4528 9.2047 21.5508 11.0273 21.5508 13.334H21.5515C21.5515 15.6406 20.4349 17.4783 18.2225 17.4783C15.9608 17.4783 14.9328 15.6085 14.9328 13.3019C14.9328 10.9952 16.1471 9.11617 18.2332 9.15901ZM18.2725 16.9121C20.0851 16.9121 20.9832 15.2187 20.9832 13.3311L20.9839 13.3318C20.9839 11.445 20.2172 9.66375 18.2732 9.66375C17.313 9.66375 16.6433 10.05 16.2028 10.6554C16.5476 10.3748 16.9817 10.2127 17.5064 10.2127C19.0421 10.2127 19.8167 11.6199 19.8167 13.3561C19.8167 15.0924 19.0556 16.4995 17.5064 16.4995C17.1609 16.4995 16.8546 16.4274 16.5862 16.2974C17.0131 16.6815 17.5721 16.9121 18.2725 16.9121ZM6.61208 16.4988C5.07645 16.4988 4.30186 15.0916 4.30186 13.3554L4.30257 13.3561C4.30257 11.6199 5.06289 10.2127 6.6128 10.2127C7.06471 10.2127 7.45022 10.3355 7.77005 10.5519C7.33528 10.0064 6.70918 9.66303 5.85534 9.66303C3.81068 9.66303 3.08249 11.4171 3.08249 13.3047C3.08249 15.1916 3.9399 16.9114 5.85534 16.9114C6.49572 16.9114 7.02116 16.6994 7.4338 16.3431C7.18964 16.4438 6.91621 16.4988 6.61208 16.4988Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>((props, {slots}) => {
      return ()=>
        <ConvertIcon iconType={'faceu_logo'} {...props} >
          {{
            default:()=><SvgComponent/>
          }}
    </ConvertIcon>;
})
IconComponent.props = iconVuePropsType
export default IconComponent
    