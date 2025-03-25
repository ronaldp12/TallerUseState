export const DarkLightMode = ({ isDarkMode, HandleMode, style, styleBtn }) => {
    return (
      <div className={style}>
        <button className={styleBtn} onClick={HandleMode}>
          
          {isDarkMode ? (
            <>
              Mode Light <i className="bi bi-brightness-high"></i>
            </>
          ) : (
            <>
              Mode Dark <i className="bi bi-moon"></i>
            </>
          )}
        </button>
      </div>
    );
  };
  