import { defineComponent, h } from 'vue';
const SvgComponent = defineComponent((props, { slots }) => {
    return () => (
        <svg
            width={200}
            height={200}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // @ts-ignore
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M123.171 114.655L122.967 114.478L88.3611 141.585L88.826 141.543C98.8616 140.631 105.544 141.164 107.62 141.541L107.716 141.559L123.171 114.655Z"
                fill="#1C1F23"
            />
            <rect x={67.706} y={73.871} width={55.6333} height={39.8004} fill="#C6CACD" stroke="#1C1F23" />
            <path
                d="M49.9683 136.507L67.6729 114.062H123.112L105.408 136.507H49.9683Z"
                fill="#888D92"
                stroke="#1C1F23"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M101.667 78.5674H75.7491V100.017H94.5176V106.273H109.115V92.5692H101.667V78.5674Z"
                fill="#888D92"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M76.6586 79.427H100.924V92.5689H94.5176V99.2238H76.6586V79.427ZM94.5176 100.05H75.7405V78.6006H101.75V92.5689H109.115V106.273H94.5176V100.05ZM101.75 93.3953H108.289V105.446H95.344V100.05H101.75V93.3953ZM100.924 93.3953V99.2238H95.344V93.3953H100.924Z"
                fill="#C6CACD"
            />
            <path
                d="M43.2897 174.887H33.5101C37.6974 173.674 37.5505 162.903 36.9536 157.669C37.8351 163.399 41.545 171.535 43.2897 174.887Z"
                fill="#1C1F23"
                stroke="#1C1F23"
            />
            <path
                d="M75.9343 40.589C75.9343 58.6942 61.2571 73.3714 43.1519 73.3714C25.0467 73.3714 10.3696 58.6942 10.3696 40.589C10.3696 22.4838 25.0467 7.80664 43.1519 7.80664C61.2571 7.80664 75.9343 22.4838 75.9343 40.589Z"
                fill="var(--semi-color-primary)"
                fill-opacity={0.2}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M47.5597 25.1167C47.5597 22.6824 45.5863 20.709 43.152 20.709C40.7177 20.709 38.7443 22.6824 38.7443 25.1167V36.1816H27.6794C25.2451 36.1816 23.2717 38.155 23.2717 40.5893C23.2717 43.0236 25.2451 44.997 27.6794 44.997H38.7443V56.0619C38.7443 58.4962 40.7177 60.4696 43.152 60.4696C45.5863 60.4696 47.5597 58.4962 47.5597 56.0619V44.997H58.6245C61.0589 44.997 63.0323 43.0236 63.0323 40.5893C63.0323 38.155 61.0589 36.1816 58.6245 36.1816H47.5597V25.1167Z"
                fill="var(--semi-color-primary)"
            />
            <path d="M63.8236 83.3281C59.2994 81.4951 50.2897 75.3715 50.4444 65.541" stroke="#1C1F23" />
            <path
                d="M52.5876 110.23C55.4742 110.324 59.0952 111.144 62.5612 115.113C65.0431 117.955 67.2269 122.321 70.013 129.61C70.8415 122.952 73.0864 116.354 74.2837 113.288C75.4811 110.222 79.5696 103.038 83.6288 102.775C87.688 102.512 88.0968 106.338 86.1986 107.418C84.3004 108.499 83.1907 108.382 81.4093 110.835C79.628 113.288 78.4518 115.777 79.3909 122.166C80.1166 119.228 81.1562 117.583 82.1662 116.461C83.1762 115.339 90.9643 108.404 96.5304 108.112C100.387 107.91 101.722 108.817 101.313 109.842C102.763 109.45 104.18 109.28 105.389 109.516C107.473 109.923 108.166 111.413 107.216 112.695C109.406 112.531 111.496 112.92 112.578 114.531C112.907 115.02 112.82 116.168 112.021 117.116C111.247 118.034 109.774 118.755 109.189 119.065C107.999 119.693 103.255 122.78 101.841 127.169C100.427 131.558 99.1099 134.631 105.304 147.994C110.01 158.147 110.937 169.317 107.169 177.599C116.131 177.317 124.055 175.448 129.189 172.552C133.58 170.075 137.464 167.055 139.578 162.043C137.251 142.389 137.315 104.787 140.493 104.622C144.985 104.388 142.222 152.627 140.493 159.323C140.243 160.291 139.936 161.196 139.578 162.043C140.249 167.71 141.119 171.885 142.17 173.24C143.868 175.429 182.608 177.997 192.377 174.83C193.654 174.416 194.437 173.903 194.576 173.279C195.587 168.737 179.782 165.016 173.697 159.323C169.51 155.405 170.929 126.897 168.734 108.865C166.539 90.8337 160.821 72.3928 143.471 68.1573C129.848 64.8314 118.485 69.8928 113.325 73.7977H85.6168C88.3316 68.2032 96.0761 57.7434 112.021 54.6169C131.282 50.8404 148.198 59.8096 158.977 72.0834C163.931 77.3252 166.725 80.7923 168.206 80.7923C169.687 80.7923 177.431 76.1113 185.814 75.5675C188.309 75.4135 188.266 78.2116 186.997 82.3741C186.477 84.0776 185.906 85.4376 184.914 87.4395C182.467 92.379 177.076 101.741 168.734 108.865C170.929 126.897 169.51 155.405 173.697 159.323C179.782 165.016 195.587 168.737 194.576 173.279C194.437 173.903 193.654 174.416 192.377 174.83C182.608 177.997 143.868 175.429 142.17 173.24C141.119 171.885 140.249 167.71 139.578 162.043C137.464 167.055 133.58 170.075 129.189 172.552C124.055 175.448 116.131 177.317 107.169 177.599C105.977 180.217 104.316 182.547 102.156 184.465C93.1656 192.449 73.1719 196.14 54.3859 186.143C44.8248 181.055 39.6678 168.523 36.8882 155.973L36.8933 156.026C37.739 164.954 38.2317 170.155 34.7067 174.549C27.6356 175.168 21.3191 174.549 15.1314 172.634C9.90805 171.017 2.21861 164.318 6.75451 150.018C11.2904 135.719 34.7325 117.24 36.8882 115.807C39.0439 114.374 44.8457 110.23 52.5876 110.23Z"
                fill="#C6CACD"
            />
            <path
                d="M70.013 129.61C68.2345 140.315 70.1454 157.678 73.3402 156.899C74.343 156.654 74.9145 155.317 75.0123 153.003C82.1662 153.336 102.782 160.986 109.48 164.796C109.634 169.418 108.892 173.81 107.169 177.598C105.977 180.217 104.316 182.547 102.156 184.465C93.1656 192.449 73.1719 196.139 54.3859 186.142C44.8248 181.054 39.6678 168.523 36.8882 155.972L36.8933 156.026C37.739 164.953 38.2317 170.155 34.7067 174.548C27.6356 175.167 21.3191 174.548 15.1314 172.633C9.90805 171.016 2.21861 164.317 6.75451 150.018C11.2904 135.718 34.7325 117.24 36.8882 115.806C39.0439 114.373 44.8457 110.229 52.5876 110.229C55.4742 110.324 59.0952 111.144 62.5612 115.113C65.0431 117.955 67.2269 122.321 70.013 129.61Z"
                fill="#888D92"
            />
            <path
                d="M105.304 147.994C110.01 158.147 110.937 169.317 107.169 177.599C116.131 177.317 124.055 175.448 129.189 172.552C133.58 170.075 137.464 167.055 139.578 162.043C137.251 142.389 137.315 104.787 140.493 104.622C144.985 104.388 142.222 152.627 140.493 159.323C140.243 160.291 139.936 161.196 139.578 162.043C140.249 167.71 141.119 171.885 142.17 173.24C143.868 175.429 182.608 177.997 192.377 174.83C193.654 174.416 194.437 173.903 194.576 173.279C195.587 168.737 179.782 165.016 173.697 159.323C169.51 155.405 170.929 126.897 168.734 108.865C166.539 90.8337 160.821 72.3928 143.471 68.1573C129.848 64.8314 118.485 69.8928 113.325 73.7977H123.5V113.703L107.5 141.5L102.542 141.429C103.227 143.301 104.131 145.463 105.304 147.994Z"
                fill="#C6CACD"
            />
            <path
                d="M70.013 129.61C75.517 146.124 76.2726 156.184 73.3402 156.9C70.1454 157.679 68.2345 140.315 70.013 129.61ZM70.013 129.61C67.2269 122.321 65.0431 117.955 62.5612 115.113C59.0952 111.144 55.4742 110.324 52.5876 110.23C44.8457 110.23 39.044 114.374 36.8882 115.807C34.7325 117.24 11.2904 135.719 6.75451 150.018C2.21861 164.318 9.90805 171.017 15.1314 172.634C21.3191 174.549 27.6356 175.168 34.7067 174.549C38.2387 170.146 37.737 164.933 36.8882 155.973M70.013 129.61C70.8415 122.952 73.0864 116.354 74.2837 113.288C75.4811 110.222 79.5696 103.038 83.6288 102.775C87.688 102.512 88.0968 106.338 86.1986 107.418C84.3004 108.499 83.1907 108.382 81.4093 110.835C79.628 113.288 78.4518 115.777 79.3909 122.166C80.1166 119.228 81.1562 117.583 82.1662 116.461C83.1762 115.339 90.9643 108.404 96.5304 108.112C102.097 107.82 102.411 109.84 99.8073 111.187C97.2038 112.533 92.194 113.79 85.4655 123.351C85.4655 123.351 84.8688 118.108 95.4756 112.309C98.3463 110.739 102.474 108.946 105.389 109.516C108.535 110.131 108.51 113.21 104.453 114.324C103.242 114.656 101.081 115.792 99.3641 117.24C96.5098 119.647 94.1006 122.809 93.5821 123.776C94.0086 120.252 97.8902 115.264 102.542 113.703C105.752 112.625 110.693 111.725 112.578 114.531C112.907 115.02 112.82 116.168 112.021 117.116C111.247 118.034 109.774 118.755 109.189 119.065C107.999 119.693 103.255 122.78 101.841 127.169C100.695 130.727 99.6122 133.42 102.542 141.429M33.6624 126.263C33.7379 131.737 34.2064 143.864 36.8882 155.973M36.8882 155.973C39.6678 168.523 44.8248 181.055 54.3859 186.143C73.1719 196.14 93.1656 192.449 102.156 184.465C104.316 182.547 105.977 180.217 107.169 177.599M107.169 177.599C110.937 169.317 110.01 158.147 105.304 147.994C104.131 145.463 103.227 143.301 102.542 141.429M107.169 177.599C116.131 177.317 124.055 175.448 129.189 172.552C133.58 170.075 137.464 167.055 139.578 162.043M168.734 108.865C170.929 126.897 169.51 155.405 173.697 159.323C179.782 165.016 195.587 168.737 194.576 173.279C194.437 173.903 193.654 174.416 192.377 174.83M168.734 108.865C166.539 90.8337 160.821 72.3928 143.471 68.1573C129.848 64.8314 118.485 69.8928 113.325 73.7977M168.734 108.865C177.076 101.741 182.467 92.379 184.914 87.4395C185.906 85.4376 186.477 84.0776 186.997 82.3741M192.377 174.83C182.608 177.997 143.868 175.429 142.17 173.24C141.119 171.885 140.249 167.71 139.578 162.043M192.377 174.83C191.954 171.915 191.129 171.268 187.574 170.227M186.997 82.3741C188.266 78.2116 188.309 75.4135 185.814 75.5675C177.431 76.1113 169.687 80.7923 168.206 80.7923C166.725 80.7923 163.931 77.3252 158.977 72.0834C148.198 59.8096 131.282 50.8404 112.021 54.6169C96.0761 57.7434 88.3316 68.2032 85.6168 73.7977H113.325M186.997 82.3741C187.011 81.3634 187.15 80.3011 186.566 79.6344C184.797 77.6119 180.682 77.5642 180.111 81.6127M113.325 73.7977H123.5V113.703L107.5 141.5L102.542 141.429M139.578 162.043C137.251 142.389 137.315 104.787 140.493 104.622C144.985 104.388 142.222 152.627 140.493 159.323C140.243 160.291 139.936 161.196 139.578 162.043Z"
                stroke="#1C1F23"
            />
            <path
                d="M58.1245 104.222C58.1245 110.068 53.4486 114.796 47.6942 114.796C41.9398 114.796 37.2638 110.068 37.2638 104.222C37.2638 98.3755 41.9398 93.6475 47.6942 93.6475C53.4486 93.6475 58.1245 98.3755 58.1245 104.222Z"
                fill="#C6CACD"
                stroke="#1C1F23"
            />
            <mask id="path-15-inside-1" fill="white">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M49.0148 93.7897C55.1926 94.3756 53.5746 106.093 49.6032 111.367C46.7228 115.191 48.4319 118.499 50.5101 122.521C50.9337 123.341 51.3727 124.191 51.7912 125.08C53.7507 127.949 54.8852 131.351 54.8852 134.999C54.8852 145.246 45.9349 153.552 34.8941 153.552C23.8534 153.552 14.9031 145.246 14.9031 134.999C14.9031 127.111 20.2075 120.373 27.6865 117.689C34.9899 113.65 37.27 109.614 37.5418 102.578C37.7771 96.4849 42.837 93.2038 49.0148 93.7897Z"
                />
            </mask>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.0148 93.7897C55.1926 94.3756 53.5746 106.093 49.6032 111.367C46.7228 115.191 48.4319 118.499 50.5101 122.521C50.9337 123.341 51.3727 124.191 51.7912 125.08C53.7507 127.949 54.8852 131.351 54.8852 134.999C54.8852 145.246 45.9349 153.552 34.8941 153.552C23.8534 153.552 14.9031 145.246 14.9031 134.999C14.9031 127.111 20.2075 120.373 27.6865 117.689C34.9899 113.65 37.27 109.614 37.5418 102.578C37.7771 96.4849 42.837 93.2038 49.0148 93.7897Z"
                fill="#1C1F23"
            />
            <path
                d="M49.6032 111.367L51.9996 113.171L49.6032 111.367ZM49.0148 93.7897L48.7316 96.7763L49.0148 93.7897ZM50.5101 122.521L53.1754 121.144L53.1754 121.144L50.5101 122.521ZM51.7912 125.08L49.0766 126.357L49.1787 126.574L49.3139 126.772L51.7912 125.08ZM27.6865 117.689L28.6999 120.513L28.927 120.431L29.1383 120.314L27.6865 117.689ZM37.5418 102.578L40.5396 102.694L37.5418 102.578ZM51.9996 113.171C54.404 109.979 55.9658 105.116 56.1131 100.926C56.187 98.8228 55.919 96.5591 54.9348 94.6609C53.8725 92.6119 51.9839 91.0578 49.2981 90.8031L48.7316 96.7763C49.1347 96.8145 49.3605 96.9449 49.6082 97.4226C49.934 98.051 50.1716 99.1562 50.1168 100.715C50.0067 103.848 48.7738 107.481 47.2068 109.562L51.9996 113.171ZM53.1754 121.144C52.0772 119.018 51.38 117.611 51.1493 116.336C50.9678 115.333 51.0735 114.401 51.9996 113.171L47.2068 109.562C45.2525 112.157 44.7725 114.791 45.2451 117.404C45.6683 119.744 46.8648 122.001 47.8449 123.898L53.1754 121.144ZM54.5058 123.803C54.0598 122.855 53.5955 121.957 53.1754 121.144L47.8449 123.898C48.272 124.725 48.6855 125.526 49.0766 126.357L54.5058 123.803ZM49.3139 126.772C50.9514 129.17 51.8852 131.987 51.8852 134.999H57.8852C57.8852 130.715 56.55 126.728 54.2685 123.388L49.3139 126.772ZM51.8852 134.999C51.8852 143.382 44.4929 150.552 34.8941 150.552V156.552C47.3769 156.552 57.8852 147.11 57.8852 134.999H51.8852ZM34.8941 150.552C25.2954 150.552 17.9031 143.382 17.9031 134.999H11.9031C11.9031 147.11 22.4114 156.552 34.8941 156.552V150.552ZM17.9031 134.999C17.9031 128.529 22.2632 122.822 28.6999 120.513L26.6732 114.865C18.1518 117.923 11.9031 125.693 11.9031 134.999H17.9031ZM34.544 102.462C34.4196 105.684 33.8478 107.868 32.7171 109.652C31.5728 111.457 29.6527 113.174 26.2348 115.064L29.1383 120.314C33.0237 118.166 35.8954 115.845 37.7849 112.864C39.6881 109.861 40.3922 106.509 40.5396 102.694L34.544 102.462ZM49.2981 90.8031C45.6326 90.4555 42.0534 91.2323 39.281 93.2562C36.4462 95.3257 34.6958 98.5337 34.544 102.462L40.5396 102.694C40.6232 100.529 41.5203 99.0502 42.8188 98.1023C44.1796 97.1088 46.2193 96.538 48.7316 96.7763L49.2981 90.8031Z"
                fill="#1C1F23"
                mask="url(#path-15-inside-1)"
            />
            <path
                d="M54.0976 105.948C54.0976 107.639 52.666 109.044 50.8583 109.044C49.0506 109.044 47.619 107.639 47.619 105.948C47.619 104.257 49.0506 102.853 50.8583 102.853C52.666 102.853 54.0976 104.257 54.0976 105.948Z"
                fill="#C6CACD"
                stroke="#1C1F23"
            />
            <path
                d="M37.1188 95.0657C37.1188 96.8972 35.578 98.4556 33.5851 98.4556C31.5922 98.4556 30.0514 96.8972 30.0514 95.0657C30.0514 93.2342 31.5922 91.6758 33.5851 91.6758C35.578 91.6758 37.1188 93.2342 37.1188 95.0657Z"
                fill="#1C1F23"
                stroke="#1C1F23"
                stroke-width={3}
            />
            <path d="M147.224 155.647C147.116 159.23 148.491 160.533 151.929 161.727" stroke="#1C1F23" />
        </svg>
    );
});
const IconComponent = defineComponent({
    name: 'IllustrationNoContentDark',

    setup() {
        return () => <SvgComponent />;
    },
});
IconComponent.props = {};
export default IconComponent;
export { SvgComponent };
