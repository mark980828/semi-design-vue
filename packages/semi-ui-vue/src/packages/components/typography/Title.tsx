import {defineComponent, ref, h, Fragment, VNode, CSSProperties} from 'vue'
import { strings } from '@douyinfe/semi-foundation/typography/constants';
import Base from './base';
import { Ellipsis, TypographyBaseType, OmitTypographyProps } from './interface';
import { ArrayElement } from '@douyinfe/semi-foundation/utils/type';

type OmitTitleProps = OmitTypographyProps;

export interface CopyableConfig {
  content?: string;
  copyTip?: VNode;
  successTip?: VNode;
  onCopy?(e: any, content: string, res: boolean): void;
}

export type LinkType = any | boolean;



export interface TitleProps extends Omit<any, OmitTitleProps>{
  className?: string;
  component?: any;
  copyable?: CopyableConfig | boolean;
  delete?: boolean;
  disabled?: boolean;
  ellipsis?: Ellipsis | boolean;
  heading?: ArrayElement<typeof strings.HEADING>;
  link?: LinkType;
  mark?: boolean;
  strong?: boolean;
  style?: CSSProperties;
  type?: TypographyBaseType;
  underline?: boolean;
}
export const vuePropsType = {
  className: {
    type: String,
    default:''
  },
  component: [String, Array, Boolean, Object,Number],
  copyable: {
    type: [Object, Boolean],
    default: false,
  },
  delete: {
    type:Boolean,
    default: false
  },
  disabled: {
    type:Boolean,
    default: false
  },
  ellipsis: {
    type: [Object, Boolean],
    default: false
  },
  heading: {
    type: [String, Array, Boolean, Object,Number],
    default: 1,
  },
  link: {
    type: [Object, Boolean],
    default: false
  },
  mark: {
    type:Boolean,
    default: false
  },
  strong: {
    type:Boolean,
    default: false
  },
  style: {
    type: [String,Object],
    default: {}
  },
  type: {
    type: String,
    default: 'primary'
  },
  underline: Boolean,
}
const Title = defineComponent<TitleProps>((props, {slots}) => {


  return () => {
    const { heading, ...rest } = props;
    const component = strings.HEADING.indexOf(heading) !== -1 ? `h${heading}` : 'h1';
    // Passing headings to support custom components
    return <Base component={component as any} heading={component} {...rest} />;
  }
})

Title.props = vuePropsType

export default Title

