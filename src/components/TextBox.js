import SelectDropDown from './SelectDropDown'

const TextBox = ({ setShowModal, selectedLanguage, style }) => {
    return(
        <div className={ style }>
            <SelectDropDown
                style={style}
                setShowModal={setShowModal} 
                selectedLanguage={selectedLanguage}
            />
            <textarea
                placeholder={ style === 'input' ? 'Enter Text' : 'Translation'}
                disabled={style === 'output'}
            />
        </div>
    )
}

export default TextBox