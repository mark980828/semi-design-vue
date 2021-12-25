
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
                d="M12 3C9.23858 3 7 5.23858 7 8C7 8.02365 7.00016 8.04725 7.00049 8.07082C7.32694 8.02415 7.66065 8 8 8C9.48725 8 10.8662 8.46382 12 9.25469C13.1338 8.46381 14.5127 8 16 8C16.3393 8 16.6731 8.02415 16.9995 8.07082C16.9998 8.04725 17 8.02365 17 8C17 5.23858 14.7614 3 12 3ZM18.9694 8.65917C18.9896 8.44217 19 8.2223 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 8.2223 5.01036 8.44217 5.03063 8.65917C2.64918 9.77632 1 12.1956 1 15C1 18.866 4.13401 22 8 22C9.48725 22 10.8662 21.5362 12 20.7453C13.1338 21.5362 14.5128 22 16 22C19.866 22 23 18.866 23 15C23 12.1956 21.3508 9.77632 18.9694 8.65917ZM16.5698 10.0321C16.3828 10.0109 16.1927 10 16 10C15.0892 10 14.2352 10.2435 13.4997 10.6691C13.899 11.1754 14.2299 11.7382 14.4783 12.3435C15.3987 11.8173 16.1356 11.007 16.5698 10.0321ZM10.5003 10.6691C9.76477 10.2435 8.91083 10 8 10C7.80733 10 7.6172 10.0109 7.43021 10.0321C7.86438 11.007 8.60135 11.8173 9.52165 12.3435C9.77013 11.7382 10.101 11.1754 10.5003 10.6691ZM11.4302 12.9679C11.5839 12.6227 11.7756 12.2981 12 11.9995C12.2244 12.2981 12.4161 12.6227 12.5698 12.9679C12.3828 12.9891 12.1927 13 12 13C11.8073 13 11.6172 12.9891 11.4302 12.9679ZM9.03063 14.3408C7.44767 13.5983 6.18825 12.2804 5.52165 10.6565C4.01522 11.5179 3 13.1404 3 15C3 17.7614 5.23858 20 8 20C8.91083 20 9.76477 19.7565 10.5003 19.3309C9.56068 18.1394 9 16.6352 9 15C9 14.7777 9.01036 14.5578 9.03063 14.3408ZM12 18.0005C11.3721 17.1647 11 16.1258 11 15C11 14.9764 11.0002 14.9527 11.0005 14.9292C11.3269 14.9759 11.6606 15 12 15C12.3394 15 12.6731 14.9759 12.9995 14.9292C12.9998 14.9527 13 14.9764 13 15C13 16.1258 12.6279 17.1647 12 18.0005ZM13.4997 19.3309C14.4393 18.1394 15 16.6352 15 15C15 14.7777 14.9896 14.5578 14.9694 14.3408C16.5523 13.5983 17.8118 12.2804 18.4783 10.6565C19.9848 11.5179 21 13.1404 21 15C21 17.7614 18.7614 20 16 20C15.0892 20 14.2352 19.7565 13.4997 19.3309Z"
                fill="currentColor"
            />
        </svg>

      );
    })
    SvgComponent.props = vuePropsType

    const IconComponent = defineComponent<IconProps>({
    name:'semi_icon-venn_chart_stroked',
    setup(props, {slots}){
      return ()=>
        <ConvertIcon iconType={'venn_chart_stroked'} {...props} >
          {{
            default:()=><SvgComponent/>
          }}
    </ConvertIcon>;
}})
IconComponent.props = iconVuePropsType
export default IconComponent
    