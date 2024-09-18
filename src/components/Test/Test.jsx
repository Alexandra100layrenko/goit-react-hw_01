const CustomButton = ({ message, children }) => {
    return (
      <button onClick={() => alert(message)} >
        {children}
      </button>
    );
  };
  
export default function Test() {
    return (
      <div>
        <CustomButton message="Playing music!">
          Play some music
        </CustomButton>
        <CustomButton message="Uploading your data!">
          Upload data
        </CustomButton>
      </div>
    );
}
  