
export const DarkLightMode = ({isDarkMode, HandleMode}) => {
  return (
      <div>

          <button onClick={HandleMode}>
              {isDarkMode ? 'Mode Light' : 'Mode Dark'}
          </button>

      </div>
  )
}
