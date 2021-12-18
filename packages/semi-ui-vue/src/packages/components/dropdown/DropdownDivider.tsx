import {defineComponent, ref, h, onActivated, Fragment} from 'vue'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { cssClasses } from '@douyinfe/semi-foundation/dropdown/constants';
import { BaseProps } from '../_base/baseComponent';



const prefixCls = cssClasses.PREFIX;

export type DropdownDividerProps = BaseProps;


export const vuePropsType = {
  style: Object,
  className: String,
}
const DropdownDivider = defineComponent<DropdownDividerProps>((props, {slots}) => {

  const { style, className } = props;
  return <div class={classnames(`${prefixCls}-divider`, className)} style={style} />;
})

DropdownDivider.props = vuePropsType

export default DropdownDivider

