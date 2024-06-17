import { useRef } from 'react'
import { chakra } from '@chakra-ui/react'

export const Logo = (props) => {
    const defaultColor = '#2B6377';
    const color = useRef(props.color ?? defaultColor);
    
    const defaultHeight = '45';
    const height = useRef(props.height ?? defaultHeight);

    return (
        <chakra.svg
            height={height.current}
            width="auto"
            viewBox="0 0 165 45"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M0 0V44.598H166V0H0ZM163.394 42.2713H2.6058V2.32417H163.394V42.2713Z" fill={color.current}/>
            <path d="M22.8153 29.1965L28.4152 14.5284H29.9401L35.6921 28.547C35.819 28.8514 35.8697 29.0925 35.8444 29.2701C35.819 29.4477 35.8063 29.5492 35.8063 29.5746L35.8444 29.6126L36.0727 29.0037L42.3195 14.4878H43.8825L35.6921 33.5733H34.053L28.4152 20.0876C28.2883 19.7831 28.2375 19.5345 28.2629 19.3442C28.2883 19.1539 28.301 19.0448 28.301 19.0194L28.2629 18.9813L28.1107 19.3619L22.7012 33.5733H20.7957L12.4911 14.4878H16.5305L22.5489 28.4708C22.6758 28.7753 22.7265 29.0164 22.7012 29.194C22.6758 29.3716 22.6631 29.4731 22.6631 29.4984L22.7012 29.5365L22.8153 29.1965Z" fill={color.current}/>
            <path d="M60.6058 30.7952C60.9864 30.4146 61.2909 29.9705 61.5193 29.4631H62.1663C61.2782 30.8104 60.1161 31.8887 58.68 32.7007C57.2439 33.5151 55.6505 33.9211 53.8998 33.9211C52.5271 33.9211 51.2458 33.6598 50.0507 33.1396C48.8582 32.6195 47.8153 31.9141 46.9273 31.0261C46.0392 30.138 45.3339 29.0952 44.8137 27.9027C44.2936 26.7101 44.0322 25.4262 44.0322 24.0536C44.0322 22.6809 44.291 21.3996 44.8137 20.2045C45.3339 19.012 46.0392 17.9691 46.9273 17.0811C47.8153 16.193 48.8582 15.4877 50.0507 14.9675C51.2432 14.4474 52.5271 14.186 53.8998 14.186C55.0441 14.186 56.1224 14.3636 57.1374 14.7189C58.1523 15.0741 59.0809 15.5765 59.9182 16.2235C60.7555 16.8705 61.4736 17.6342 62.0699 18.5096C62.6661 19.3849 63.1051 20.344 63.3842 21.3869C63.4095 21.4884 63.4349 21.6102 63.4603 21.7472C63.4857 21.8867 63.511 22.0085 63.5364 22.11L63.6506 22.6428H45.8591C46.0621 23.6603 46.4503 24.6803 47.0212 25.7104C47.5921 26.7406 48.3355 27.7098 49.2489 28.6258C50.1649 29.5417 51.1468 30.2902 52.2023 30.8738C53.2553 31.4574 54.2981 31.8456 55.3257 32.0359C56.3559 32.2262 57.3251 32.2135 58.2411 31.9978C59.157 31.7822 59.9309 31.3559 60.5652 30.7216L60.6058 30.7952ZM47.2343 17.4617C46.7268 17.9691 46.3513 18.573 46.1103 19.2708C45.8692 19.9685 45.7728 20.7246 45.8236 21.5366H60.1846C59.9563 21.1814 59.7076 20.8388 59.4412 20.509C59.1748 20.1791 58.8754 19.8493 58.5455 19.5194C57.6321 18.606 56.6477 17.8626 55.5921 17.2917C54.5392 16.7208 53.4963 16.3402 52.4687 16.1499C51.4411 15.9596 50.4693 15.9647 49.5534 16.1677C48.6399 16.3706 47.8635 16.7893 47.2292 17.4262V17.4617H47.2343Z" fill={color.current}/>
            <path d="M82.1677 30.7952C82.5483 30.4146 82.8528 29.9705 83.0812 29.4631H83.7282C82.8401 30.8104 81.6781 31.8887 80.2419 32.7007C78.8058 33.5151 77.2124 33.9211 75.4617 33.9211C74.089 33.9211 72.8077 33.6598 71.6126 33.1396C70.4201 32.6195 69.3772 31.9141 68.4892 31.0261C67.6011 30.138 66.8958 29.0952 66.3756 27.9027C65.8555 26.7101 65.5941 25.4262 65.5941 24.0536C65.5941 22.6809 65.8529 21.3996 66.3756 20.2045C66.8958 19.012 67.6011 17.9691 68.4892 17.0811C69.3772 16.193 70.4201 15.4877 71.6126 14.9675C72.8051 14.4474 74.089 14.186 75.4617 14.186C76.606 14.186 77.6843 14.3636 78.6993 14.7189C79.7142 15.0741 80.6428 15.5765 81.4801 16.2235C82.3175 16.8705 83.0355 17.6342 83.6318 18.5096C84.228 19.3849 84.667 20.344 84.9461 21.3869C84.9715 21.4884 84.9968 21.6102 85.0222 21.7472C85.0476 21.8867 85.073 22.0085 85.0983 22.11L85.2125 22.6428H67.421C67.624 23.6603 68.0122 24.6803 68.5831 25.7104C69.154 26.7406 69.8974 27.7098 70.8108 28.6258C71.7268 29.5417 72.7087 30.2902 73.7642 30.8738C74.8172 31.4574 75.86 31.8456 76.8876 32.0359C77.9178 32.2262 78.887 32.2135 79.803 31.9978C80.719 31.7822 81.4928 31.3559 82.1272 30.7216L82.1677 30.7952ZM68.7962 17.4617C68.2888 17.9691 67.9132 18.573 67.6722 19.2708C67.4311 19.9685 67.3347 20.7246 67.3855 21.5366H81.7466C81.5182 21.1814 81.2695 20.8388 81.0031 20.509C80.7367 20.1791 80.4373 19.8493 80.1075 19.5194C79.194 18.606 78.2096 17.8626 77.1541 17.2917C76.1011 16.7208 75.0583 16.3402 74.0307 16.1499C73.003 15.9596 72.0313 15.9647 71.1153 16.1677C70.2019 16.3706 69.4255 16.7893 68.7911 17.4262V17.4617H68.7962Z" fill={color.current}/>
            <path d="M107.122 14.5664L97.5971 33.6139H95.6154L85.5195 14.5664H89.6731L97.3687 29.4248C97.5463 29.78 97.6097 30.0541 97.559 30.2443C97.5083 30.4346 97.4702 30.5564 97.4448 30.6072L97.4829 30.6452L97.7112 30.1885L105.635 14.5689H107.122V14.5664Z" fill={color.current}/>
            <path d="M113.255 14.5664V33.6519H109.675V14.5664H113.255Z" fill={color.current}/>
            <path d="M133.18 33.1194C132.774 33.2463 132.381 33.3681 132 33.4822C131.62 33.5964 131.226 33.6802 130.82 33.7309C129.932 33.8578 129.093 33.8831 128.306 33.807C127.621 33.7309 126.946 33.5787 126.286 33.3503C125.627 33.1219 125.002 32.8048 124.419 32.3988C122.843 31.3332 121.816 29.9732 121.333 28.3214C121.004 27.1542 120.839 25.9211 120.839 24.6271C120.839 23.3305 120.839 22.0746 120.839 20.8541V15.7872H109.677V14.4906H121.295V14.4525C121.219 14.4525 121.143 14.4272 121.067 14.3764C120.94 14.3003 120.877 14.1227 120.877 13.8436V13.0063V6.87109H124.533V14.5286H132.723L132.076 15.8227H124.495V19.824V21.9959C124.495 22.3258 124.5 22.6556 124.513 22.9855C124.525 23.3153 124.457 23.6325 124.302 23.9369C124.099 24.3683 123.883 24.7819 123.655 25.1751C123.427 25.5684 123.236 25.982 123.084 26.4133C122.932 26.87 122.83 27.3521 122.78 27.8596C122.729 28.3671 122.742 28.8694 122.818 29.3642C122.894 29.859 123.041 30.3233 123.257 30.7547C123.472 31.186 123.772 31.5539 124.152 31.8584C124.736 32.2897 125.383 32.5257 126.096 32.5637C126.806 32.6018 127.491 32.5967 128.154 32.546C128.94 32.4952 129.691 32.343 130.402 32.0893C130.757 31.9624 131.082 31.8026 131.374 31.6123C131.665 31.422 131.952 31.2266 132.231 31.0211L132.269 30.983L133.18 33.1194Z" fill={color.current}/>
            <path d="M150.018 30.7952C150.398 30.4146 150.703 29.9705 150.931 29.4631H151.578C150.69 30.8104 149.528 31.8887 148.092 32.7007C146.656 33.5151 145.062 33.9211 143.312 33.9211C141.939 33.9211 140.658 33.6598 139.462 33.1396C138.27 32.6195 137.227 31.9141 136.339 31.0261C135.451 30.138 134.746 29.0952 134.225 27.9027C133.705 26.7101 133.444 25.4262 133.444 24.0536C133.444 22.6809 133.703 21.3996 134.225 20.2045C134.746 19.012 135.451 17.9691 136.339 17.0811C137.227 16.193 138.27 15.4877 139.462 14.9675C140.655 14.4474 141.939 14.186 143.312 14.186C144.456 14.186 145.534 14.3636 146.549 14.7189C147.564 15.0741 148.493 15.5765 149.33 16.2235C150.167 16.8705 150.885 17.6342 151.482 18.5096C152.078 19.3849 152.517 20.344 152.796 21.3869C152.821 21.4884 152.847 21.6102 152.872 21.7472C152.897 21.8867 152.923 22.0085 152.948 22.11L153.062 22.6428H135.271C135.474 23.6603 135.862 24.6803 136.433 25.7104C137.004 26.7406 137.747 27.7098 138.661 28.6258C139.577 29.5417 140.559 30.2902 141.614 30.8738C142.667 31.4574 143.71 31.8456 144.737 32.0359C145.768 32.2262 146.737 32.2135 147.653 31.9978C148.569 31.7822 149.343 31.3559 149.977 30.7216L150.018 30.7952ZM136.646 17.4617C136.139 17.9691 135.763 18.573 135.522 19.2708C135.281 19.9685 135.185 20.7246 135.235 21.5366H149.596C149.368 21.1814 149.119 20.8388 148.853 20.509C148.587 20.1791 148.287 19.8493 147.957 19.5194C147.044 18.606 146.059 17.8626 145.004 17.2917C143.948 16.7208 142.908 16.3402 141.88 16.1499C140.853 15.9596 139.881 15.9647 138.965 16.1677C138.052 16.3706 137.275 16.7893 136.641 17.4262V17.4617H136.646Z" fill={color.current}/>
        </chakra.svg>
    )
}