
export const DarkLightMode = ({isDarkMode, HandleMode, style}) => {
  return (
      <div className={style}>

          <button onClick={HandleMode}>
              {isDarkMode ? 'Mode Light' : 'Mode Dark'}
          </button>

      </div>
  )
}
