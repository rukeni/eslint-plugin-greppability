import wordCountVariable from './rules/word-count-variable'
import registeredVocabulary from './rules/registered-vocabulary'

export default {
  rules: {
    'word-count-variable': wordCountVariable,
    'registered-vocabulary': registeredVocabulary,
  },
}