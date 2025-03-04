import withConfigTransport from '../../services/config-transport/withConfigTransport'
import _VaInput from './VaInput.vue'

export { default as VaInputWrapper } from './components/VaInputWrapper.vue'
export { VaMessageList } from './components/VaMessageList'
export { default as VaMessageListWrapper } from './components/VaMessageListWrapper.vue'

export const VaInput = withConfigTransport(_VaInput)
