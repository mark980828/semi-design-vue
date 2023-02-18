import {defineComponent, ref, h, Fragment, provide, watch} from 'vue'
import type {BaseFormApi} from "@douyinfe/semi-foundation/form/interface";


export const vuePropsType = {
  value: Object
}
const Provider = defineComponent<{value:BaseFormApi}>((props, {slots}) => {
  const ConfigContext = ref<BaseFormApi>();

  provide('BaseFormApiContext', ConfigContext)
  watch(()=>props.value, ()=>{
    ConfigContext.value = props.value
  }, { immediate: true})
  return ()=>slots.default?slots.default(ConfigContext.value):null
})

Provider.props = vuePropsType
Provider.name = 'BaseFormApiContextProvider'

export default Provider

