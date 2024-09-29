const Logo = ({ size = 110, fill, stroke }) => (
  <svg width={size} viewBox="0 0 111 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="19.5" cy="19.5" r="19.5" fill={stroke} />
    <path
      d="M14.6307 27L10.3409 12.4545H14.7443L16.733 21.4034H16.8466L19.2045 12.4545H22.6705L25.0284 21.4318H25.142L27.1307 12.4545H31.5341L27.2443 27H23.4659L20.9943 18.875H20.8807L18.4091 27H14.6307ZM36.8555 27.1989C35.6718 27.1989 34.6585 26.9645 33.8157 26.4957C32.9729 26.0223 32.3266 25.3641 31.8768 24.5213C31.427 23.6738 31.2021 22.6913 31.2021 21.5739C31.2021 20.4564 31.427 19.4763 31.8768 18.6335C32.3266 17.786 32.9729 17.1278 33.8157 16.6591C34.6585 16.1856 35.6718 15.9489 36.8555 15.9489C38.0392 15.9489 39.0524 16.1856 39.8952 16.6591C40.738 17.1278 41.3844 17.786 41.8342 18.6335C42.284 19.4763 42.5089 20.4564 42.5089 21.5739C42.5089 22.6913 42.284 23.6738 41.8342 24.5213C41.3844 25.3641 40.738 26.0223 39.8952 26.4957C39.0524 26.9645 38.0392 27.1989 36.8555 27.1989ZM36.8839 24.3011C37.2153 24.3011 37.5018 24.1899 37.7433 23.9673C37.9847 23.7448 38.1718 23.4276 38.3043 23.0156C38.4369 22.6037 38.5032 22.1136 38.5032 21.5455C38.5032 20.9725 38.4369 20.4825 38.3043 20.0753C38.1718 19.6634 37.9847 19.3461 37.7433 19.1236C37.5018 18.901 37.2153 18.7898 36.8839 18.7898C36.5335 18.7898 36.2328 18.901 35.9819 19.1236C35.7309 19.3461 35.5392 19.6634 35.4066 20.0753C35.274 20.4825 35.2077 20.9725 35.2077 21.5455C35.2077 22.1136 35.274 22.6037 35.4066 23.0156C35.5392 23.4276 35.7309 23.7448 35.9819 23.9673C36.2328 24.1899 36.5335 24.3011 36.8839 24.3011ZM44.0998 27V16.0909H47.9066V18.1648H48.0202C48.2191 17.3977 48.534 16.8366 48.9648 16.4815C49.4004 16.1264 49.9094 15.9489 50.4918 15.9489C50.6623 15.9489 50.8304 15.9631 50.9961 15.9915C51.1665 16.0152 51.3299 16.0507 51.4862 16.098V19.4432C51.292 19.3769 51.0529 19.3272 50.7688 19.294C50.4847 19.2609 50.2409 19.2443 50.0373 19.2443C49.6538 19.2443 49.3081 19.3319 49.0004 19.5071C48.6973 19.6776 48.4582 19.919 48.283 20.2315C48.1078 20.5393 48.0202 20.9015 48.0202 21.3182V27H44.0998ZM59.7266 16.0909V18.9318H52.5391V16.0909H59.7266ZM53.9311 13.4773H57.8516V23.4915C57.8516 23.643 57.8776 23.7708 57.9297 23.875C57.9818 23.9744 58.0623 24.0502 58.1712 24.1023C58.2801 24.1496 58.4197 24.1733 58.5902 24.1733C58.7086 24.1733 58.8459 24.1591 59.0021 24.1307C59.1631 24.1023 59.2815 24.0786 59.3572 24.0597L59.9254 26.8153C59.7502 26.8674 59.4993 26.9313 59.1726 27.0071C58.8506 27.0829 58.4671 27.1326 58.022 27.1562C57.1224 27.2036 56.3672 27.1113 55.7564 26.8793C55.1456 26.6425 54.6863 26.2708 54.3786 25.7642C54.0708 25.2576 53.9216 24.6231 53.9311 23.8608V13.4773ZM61.5039 27V12.4545H65.4528V18.3352H65.6516L70.0266 12.4545H74.6289L69.7141 18.9318L74.7425 27H70.0266L66.7596 21.5455L65.4528 23.25V27H61.5039ZM75.8576 27V16.0909H79.6644V18.1648H79.7781C79.9769 17.3977 80.2918 16.8366 80.7227 16.4815C81.1583 16.1264 81.6673 15.9489 82.2496 15.9489C82.4201 15.9489 82.5882 15.9631 82.7539 15.9915C82.9244 16.0152 83.0877 16.0507 83.244 16.098V19.4432C83.0498 19.3769 82.8107 19.3272 82.5266 19.294C82.2425 19.2609 81.9987 19.2443 81.7951 19.2443C81.4116 19.2443 81.0659 19.3319 80.7582 19.5071C80.4551 19.6776 80.216 19.919 80.0408 20.2315C79.8656 20.5393 79.7781 20.9015 79.7781 21.3182V27H75.8576ZM87.0614 27.1705C86.3654 27.1705 85.7499 27.0568 85.2148 26.8295C84.6845 26.5975 84.2679 26.2472 83.9648 25.7784C83.6618 25.3097 83.5103 24.7131 83.5103 23.9886C83.5103 23.392 83.6121 22.883 83.8157 22.4616C84.0193 22.0355 84.3034 21.6875 84.668 21.4176C85.0326 21.1477 85.4563 20.9418 85.9393 20.7997C86.427 20.6577 86.9525 20.5653 87.516 20.5227C88.1268 20.4754 88.6168 20.4186 88.9862 20.3523C89.3602 20.2812 89.6301 20.1842 89.7958 20.0611C89.9615 19.9332 90.0444 19.7652 90.0444 19.5568V19.5284C90.0444 19.2443 89.9355 19.0265 89.7177 18.875C89.4999 18.7235 89.2205 18.6477 88.8796 18.6477C88.5056 18.6477 88.2002 18.7306 87.9634 18.8963C87.7314 19.0573 87.5917 19.3059 87.5444 19.642H83.9364C83.9838 18.9792 84.1945 18.3684 84.5685 17.8097C84.9473 17.2462 85.4989 16.7964 86.2234 16.4602C86.9478 16.1193 87.8522 15.9489 88.9364 15.9489C89.7177 15.9489 90.4184 16.0412 91.0387 16.2259C91.659 16.4058 92.1869 16.6591 92.6225 16.9858C93.0581 17.3078 93.3896 17.6866 93.6168 18.1222C93.8488 18.553 93.9648 19.0218 93.9648 19.5284V27H90.3001V25.4659H90.2148C89.997 25.8731 89.7319 26.2022 89.4194 26.4531C89.1116 26.7041 88.7589 26.8864 88.3612 27C87.9682 27.1136 87.5349 27.1705 87.0614 27.1705ZM88.3398 24.6989C88.6381 24.6989 88.9175 24.6373 89.1779 24.5142C89.4431 24.3911 89.6585 24.2135 89.8242 23.9815C89.9899 23.7495 90.0728 23.4678 90.0728 23.1364V22.2273C89.9686 22.2699 89.8574 22.3101 89.739 22.348C89.6254 22.3859 89.5022 22.4214 89.3697 22.4545C89.2418 22.4877 89.1045 22.5185 88.9577 22.5469C88.8157 22.5753 88.6665 22.6013 88.5103 22.625C88.2073 22.6723 87.9587 22.7505 87.7646 22.8594C87.5752 22.9635 87.4331 23.0938 87.3384 23.25C87.2485 23.4015 87.2035 23.572 87.2035 23.7614C87.2035 24.0644 87.31 24.2964 87.5231 24.4574C87.7362 24.6184 88.0084 24.6989 88.3398 24.6989ZM102.372 16.0909V18.9318H95.071V16.0909H102.372ZM96.4631 27V15.7784C96.4631 14.8788 96.6241 14.133 96.946 13.5412C97.268 12.9493 97.7225 12.5066 98.3097 12.2131C98.8968 11.9195 99.5881 11.7727 100.384 11.7727C100.881 11.7727 101.364 11.8106 101.832 11.8864C102.306 11.9621 102.656 12.0284 102.884 12.0852L102.315 14.8977C102.173 14.8551 102.008 14.822 101.818 14.7983C101.629 14.7699 101.463 14.7557 101.321 14.7557C100.952 14.7557 100.703 14.8338 100.575 14.9901C100.447 15.1463 100.384 15.3523 100.384 15.608V27H96.4631ZM110.391 16.0909V18.9318H103.203V16.0909H110.391ZM104.595 13.4773H108.516V23.4915C108.516 23.643 108.542 23.7708 108.594 23.875C108.646 23.9744 108.726 24.0502 108.835 24.1023C108.944 24.1496 109.084 24.1733 109.254 24.1733C109.373 24.1733 109.51 24.1591 109.666 24.1307C109.827 24.1023 109.946 24.0786 110.021 24.0597L110.589 26.8153C110.414 26.8674 110.163 26.9313 109.837 27.0071C109.515 27.0829 109.131 27.1326 108.686 27.1562C107.786 27.2036 107.031 27.1113 106.42 26.8793C105.81 26.6425 105.35 26.2708 105.043 25.7642C104.735 25.2576 104.586 24.6231 104.595 23.8608V13.4773Z"
      fill={fill}
    />
  </svg>
);

const Home = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.25 12L11.2045 3.04551C11.6438 2.60617 12.3562 2.60617 12.7955 3.04551L21.75 12M4.5 9.75001V19.875C4.5 20.4963 5.00368 21 5.625 21H9.75V16.125C9.75 15.5037 10.2537 15 10.875 15H13.125C13.7463 15 14.25 15.5037 14.25 16.125V21H18.375C18.9963 21 19.5 20.4963 19.5 19.875V9.75001M8.25 21H16.5"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Search = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Bookmark = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.5933 3.32241C18.6939 3.45014 19.5 4.399 19.5 5.50699V21L12 17.25L4.5 21V5.50699C4.5 4.399 5.30608 3.45014 6.40668 3.32241C8.24156 3.10947 10.108 3 12 3C13.892 3 15.7584 3.10947 17.5933 3.32241Z"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Statistic = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 13.125C3 12.5037 3.50368 12 4.125 12H6.375C6.99632 12 7.5 12.5037 7.5 13.125V19.875C7.5 20.4963 6.99632 21 6.375 21H4.125C3.50368 21 3 20.4963 3 19.875V13.125Z"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 8.625C9.75 8.00368 10.2537 7.5 10.875 7.5H13.125C13.7463 7.5 14.25 8.00368 14.25 8.625V19.875C14.25 20.4963 13.7463 21 13.125 21H10.875C10.2537 21 9.75 20.4963 9.75 19.875V8.625Z"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 4.125C16.5 3.50368 17.0037 3 17.625 3H19.875C20.4963 3 21 3.50368 21 4.125V19.875C21 20.4963 20.4963 21 19.875 21H17.625C17.0037 21 16.5 20.4963 16.5 19.875V4.125Z"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Settings = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.3426 3.94002C10.433 3.39756 10.9024 2.99997 11.4523 2.99997H12.5463C13.0962 2.99997 13.5656 3.39756 13.656 3.94002L13.8049 4.83383C13.8757 5.2581 14.1886 5.59835 14.5858 5.76329C14.9832 5.92829 15.4396 5.90625 15.7897 5.65614L16.5273 5.1293C16.9748 4.80966 17.5878 4.86039 17.9767 5.24926L18.7503 6.02281C19.1391 6.41168 19.1899 7.02469 18.8702 7.4722L18.3432 8.21003C18.0931 8.56009 18.0711 9.0163 18.236 9.4136C18.4009 9.81075 18.7411 10.1236 19.1653 10.1943L20.0592 10.3433C20.6017 10.4337 20.9993 10.903 20.9993 11.453V12.547C20.9993 13.0969 20.6017 13.5662 20.0592 13.6566L19.1654 13.8056C18.7412 13.8763 18.4009 14.1892 18.236 14.5865C18.071 14.9839 18.093 15.4402 18.3431 15.7904L18.8699 16.5278C19.1895 16.9753 19.1388 17.5883 18.7499 17.9772L17.9764 18.7507C17.5875 19.1396 16.9745 19.1903 16.527 18.8707L15.7894 18.3438C15.4393 18.0938 14.983 18.0717 14.5857 18.2367C14.1885 18.4016 13.8757 18.7418 13.805 19.166L13.656 20.0599C13.5656 20.6024 13.0962 21 12.5463 21H11.4523C10.9024 21 10.433 20.6024 10.3426 20.0599L10.1937 19.1661C10.1229 18.7418 9.81002 18.4016 9.41278 18.2367C9.01538 18.0717 8.55905 18.0937 8.2089 18.3438L7.47128 18.8707C7.02377 19.1903 6.41076 19.1396 6.02189 18.7507L5.24834 17.9772C4.85947 17.5883 4.80874 16.9753 5.12838 16.5278L5.65542 15.7899C5.90546 15.4399 5.9275 14.9837 5.76255 14.5863C5.59767 14.1892 5.25749 13.8763 4.83332 13.8056L3.93935 13.6566C3.39689 13.5662 2.9993 13.0969 2.9993 12.547V11.453C2.9993 10.903 3.39689 10.4337 3.93935 10.3433L4.83316 10.1943C5.25743 10.1236 5.59768 9.81068 5.76262 9.41344C5.92763 9.01602 5.90559 8.55967 5.65547 8.20951L5.12878 7.47213C4.80913 7.02462 4.85986 6.41161 5.24873 6.02274L6.02228 5.24919C6.41115 4.86033 7.02416 4.80959 7.47167 5.12924L8.20927 5.65609C8.55934 5.90615 9.01558 5.92819 9.4129 5.76323C9.81007 5.59834 10.1229 5.25816 10.1936 4.83397L10.3426 3.94002Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 12C15 13.6568 13.6569 15 12 15C10.3431 15 9 13.6568 9 12C9 10.3431 10.3431 8.99999 12 8.99999C13.6569 8.99999 15 10.3431 15 12Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDown = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.5 8.25L12 15.75L4.5 8.25"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeft = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.75 19.5L8.25 12L15.75 4.5"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.25 4.5L15.75 12L8.25 19.5"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Confirm = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.63257 10.25C7.43892 10.25 8.16648 9.80416 8.6641 9.16967C9.43726 8.18384 10.4117 7.3634 11.5255 6.77021C12.2477 6.38563 12.8743 5.81428 13.1781 5.05464C13.3908 4.5231 13.5 3.95587 13.5 3.38338V2.75C13.5 2.33579 13.8358 2 14.25 2C15.4926 2 16.5 3.00736 16.5 4.25C16.5 5.40163 16.2404 6.49263 15.7766 7.46771C15.511 8.02604 15.8836 8.75 16.5019 8.75M16.5019 8.75H19.6277C20.6544 8.75 21.5733 9.44399 21.682 10.4649C21.7269 10.8871 21.75 11.3158 21.75 11.75C21.75 14.5976 20.7581 17.2136 19.101 19.2712C18.7134 19.7525 18.1142 20 17.4962 20H13.4802C12.9966 20 12.5161 19.922 12.0572 19.7691L8.94278 18.7309C8.48393 18.578 8.00342 18.5 7.51975 18.5H5.90421M16.5019 8.75H14.25M5.90421 18.5C5.98702 18.7046 6.07713 18.9054 6.17423 19.1022C6.37137 19.5017 6.0962 20 5.65067 20H4.74289C3.85418 20 3.02991 19.482 2.77056 18.632C2.43208 17.5226 2.25 16.3451 2.25 15.125C2.25 13.5725 2.54481 12.0889 3.08149 10.7271C3.38655 9.95303 4.16733 9.5 4.99936 9.5H6.05212C6.52404 9.5 6.7973 10.0559 6.5523 10.4593C5.72588 11.8198 5.25 13.4168 5.25 15.125C5.25 16.3185 5.48232 17.4578 5.90421 18.5Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Error = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.9998 9.00006V12.7501M2.69653 16.1257C1.83114 17.6257 2.91371 19.5001 4.64544 19.5001H19.3541C21.0858 19.5001 22.1684 17.6257 21.303 16.1257L13.9487 3.37819C13.0828 1.87736 10.9167 1.87736 10.0509 3.37819L2.69653 16.1257ZM11.9998 15.7501H12.0073V15.7576H11.9998V15.7501Z"
      stroke={stroke}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PasswordShow = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.03555 12.3224C1.96647 12.1151 1.9664 11.8907 2.03536 11.6834C3.42372 7.50972 7.36079 4.5 12.0008 4.5C16.6387 4.5 20.5742 7.50692 21.9643 11.6776C22.0334 11.8849 22.0335 12.1093 21.9645 12.3166C20.5761 16.4903 16.6391 19.5 11.9991 19.5C7.36119 19.5 3.42564 16.4931 2.03555 12.3224Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PasswordHide = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.97993 8.22257C3.05683 9.31382 2.35242 10.596 1.93436 12.0015C3.22565 16.338 7.24311 19.5 11.9991 19.5C12.9917 19.5 13.9521 19.3623 14.8623 19.1049M6.22763 6.22763C7.88389 5.13558 9.86771 4.5 12 4.5C16.756 4.5 20.7734 7.66205 22.0647 11.9985C21.3528 14.3919 19.8106 16.4277 17.772 17.772M6.22763 6.22763L3 3M6.22763 6.22763L9.87868 9.87868M17.772 17.772L21 21M17.772 17.772L14.1213 14.1213M14.1213 14.1213C14.6642 13.5784 15 12.8284 15 12C15 10.3431 13.6569 9 12 9C11.1716 9 10.4216 9.33579 9.87868 9.87868M14.1213 14.1213L9.87868 9.87868"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Lock = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.5 10.5V6.75C16.5 4.26472 14.4853 2.25 12 2.25C9.51472 2.25 7.5 4.26472 7.5 6.75V10.5M6.75 21.75H17.25C18.4926 21.75 19.5 20.7426 19.5 19.5V12.75C19.5 11.5074 18.4926 10.5 17.25 10.5H6.75C5.50736 10.5 4.5 11.5074 4.5 12.75V19.5C4.5 20.7426 5.50736 21.75 6.75 21.75Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Login = ({ size = 24, stroke }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.75 9V5.25C15.75 4.00736 14.7426 3 13.5 3L7.5 3C6.25736 3 5.25 4.00736 5.25 5.25L5.25 18.75C5.25 19.9926 6.25736 21 7.5 21H13.5C14.7426 21 15.75 19.9926 15.75 18.75V15M12 9L9 12M9 12L12 15M9 12L21.75 12"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AvatarPlus = ({ size = 33, stroke = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.2382 0.427845L15.9284 1.78405C16.2674 1.88208 16.6272 1.88283 16.9666 1.78621L21.7966 0.411303C22.6418 0.170715 23.5409 0.546916 23.963 1.31768L26.4694 5.89504C26.6375 6.20214 26.888 6.45626 27.1927 6.62883L31.1787 8.88671C31.9497 9.32347 32.3117 10.2389 32.0479 11.0849L30.6672 15.513C30.554 15.876 30.5534 16.2648 30.6655 16.6282L32.06 21.1493C32.3177 21.9849 31.9661 22.8879 31.2113 23.3292L26.768 25.9266C26.4649 26.1039 26.2173 26.3624 26.0534 26.673L23.9399 30.6768C23.531 31.4515 22.6418 31.8417 21.7948 31.6181L16.9314 30.3344C16.6141 30.2507 16.2804 30.2513 15.9635 30.3363L11.2488 31.6004C10.3822 31.8328 9.47213 31.4213 9.07421 30.6172L6.96789 26.3608C6.79108 26.0035 6.50542 25.7116 6.15206 25.5271L1.84775 23.2796C1.06147 22.869 0.668508 21.9652 0.904481 21.1102L2.1597 16.562C2.24855 16.24 2.25014 15.9002 2.16431 15.5775L0.876636 10.735C0.655154 9.90215 1.02762 9.02522 1.7808 8.60629L6.20271 6.1468C6.52438 5.96789 6.78654 5.69859 6.95674 5.37222L9.04628 1.36568C9.4606 0.571256 10.3774 0.178965 11.2382 0.427845Z"
      fill="#ffffff"
    />
    <path d="M16.5 10.75V21.25" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.25 16H21.75" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ name, fill = 'currentColor', stroke = 'currentColor', size }) => {
  return (
    <>
      {name === 'logo' && <Logo size={size} fill={fill} stroke={stroke} />}
      {name === 'home' && <Home size={size} stroke={stroke} />}
      {name === 'search' && <Search size={size} stroke={stroke} />}
      {name === 'bookmark' && <Bookmark size={size} stroke={stroke} />}
      {name === 'statistic' && <Statistic size={size} stroke={stroke} />}
      {name === 'settings' && <Settings size={size} stroke={stroke} />}
      {name === 'arrow-down' && <ArrowDown size={size} stroke={stroke} />}
      {name === 'arrow-left' && <ArrowLeft size={size} stroke={stroke} />}
      {name === 'arrow-right' && <ArrowRight size={size} stroke={stroke} />}
      {name === 'confirm' && <Confirm size={size} stroke={stroke} />}
      {name === 'error' && <Error size={size} stroke={stroke} />}
      {name === 'password-show' && <PasswordShow size={size} stroke={stroke} />}
      {name === 'password-hide' && <PasswordHide size={size} stroke={stroke} />}
      {name === 'lock' && <Lock size={size} stroke={stroke} />}
      {name === 'login' && <Login size={size} stroke={stroke} />}
      {name === 'avatar-plus' && <AvatarPlus size={size} stroke={stroke} />}
    </>
  );
};

export default Icon;
