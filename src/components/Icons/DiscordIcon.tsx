const DiscordIcon = ({ width, height }: { width?: number; height?: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 16} height={height || 12} viewBox="0 0 16 12">
      <g fill="none" fillRule="evenodd">
        <g fill="#7289DA" fillRule="nonzero">
          <g>
            <g>
              <g>
                <g>
                  <path
                    d="M6.108 0c.283.006.55.132.735.346l.12.138.034.046C7.587.477 8.183.47 8.783.51l.209.019.181-.201c.192-.21.464-.33.748-.328h.07c.38.01.868.073 1.428.224.83.225 1.655.602 2.438 1.166.115.083.21.19.282.312.244.423.593 1.152.939 2.12.576 1.612.922 3.32.922 5.058 0 .322-.117.566-.293.733l-.013.009-.155.188c-.23.261-.512.518-.848.755-.882.622-1.988 1.007-3.32 1.048-.3.01-.588-.117-.785-.344l-.691-.805-.116.024c-1.043.189-2.07.194-3.087.05l-.38-.062-.182-.037-.293.35-.425.494c-.197.225-.484.35-.784.342-1.336-.041-2.446-.43-3.328-1.056C.718 10.155.343 9.726.145 9.4.05 9.241 0 9.062 0 8.88c0-1.738.346-3.446.922-5.058.283-.792.568-1.424.796-1.86l.143-.26c.072-.124.169-.23.285-.313C2.993.782 3.885.392 4.769.177 5.327.042 5.783-.003 6.094 0zm-.021 1S4.455.965 2.727 2.202C2.728 2.202 1 5.194 1 8.88c0 0 1.008 1.664 3.659 1.745 0 0 .168-.193.381-.443l.423-.504c-1.247-.36-1.859-1.036-2.04-1.27l-.06-.082s.04.026.113.07l.223.126c.004 0 .008.001.013.004l.368.192c.224.109.444.2.65.278l.255.096c.436.157.94.295 1.51.4.9.162 1.955.22 3.107.012.563-.104 1.14-.254 1.739-.497l.214-.08c.363-.146.756-.341 1.166-.601 0 0-.6.936-2.172 1.363l.792.924c2.194-.066 3.263-1.218 3.566-1.606L15 8.88c0-3.088-1.213-5.69-1.606-6.452l-.122-.226C11.741 1.098 10.266 1.007 9.968 1h-.055l-.167.184c1.631.471 2.564 1.12 2.872 1.361l.115.095c-1.248-.647-2.472-.97-3.611-1.098-.864-.092-1.692-.07-2.424.023-.072 0-.132.012-.204.023-.42.047-1.44.185-2.723.728-.222.093-.399.174-.52.231l-.188.093s.984-.913 3.144-1.502zm4.054 4.264c.672 0 1.224.566 1.224 1.27 0 .706-.54 1.272-1.224 1.272-.671 0-1.223-.566-1.223-1.271s.54-1.271 1.223-1.271zm-4.378 0c.683 0 1.235.566 1.223 1.27 0 .706-.54 1.272-1.223 1.272-.672 0-1.224-.566-1.224-1.271s.54-1.271 1.224-1.271z"
                    transform="translate(-181 -741) translate(19 734) translate(128) translate(34 7)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default DiscordIcon