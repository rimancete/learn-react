import './styles.css'
export const TextInput = ({inputValue, actionFn}) => {
    return (
        <input 
          className="text-input"
          onChange={actionFn}
          value={inputValue}
          type="search"
          placeholder="Type your search"
        />
    )
}