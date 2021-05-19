import styled from "styled-components"

export const Title = styled.p`
    font-size: 24px;
    color: #e5e5e5;
    font-weight: bold;
    // margin-left: 56px;
    margin-right: 56px;
    margin-top: 0;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    box-sizing: border-box;

    > ${Title} {
        @media (max-width: 1000px) {
            margin-left: 30px;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`

// export const Group = styled.div`
//     display: flex;
//     flex-direction: ${({ flexDirection }) => (flexDirection === "row" ? "row" : "column")};
//     ${({ alignItems }) => alignItems && `align-item: ${alignItems}`};
//     ${({ margin }) => margin && `margin:${margin}`}
    
//     background: linear-gradient(
//         to right,
//         hsl(0, 0%, 0%) 0%,
//         hsla(0, 0%, 0%, 0.964) 7.4%,
//         hsla(0, 0%, 0%, 0.918) 15.3%,
//         hsla(0, 0%, 0%, 0.862) 23.4%,
//         hsla(0, 0%, 0%, 0.799) 31.6%,
//         hsla(0, 0%, 0%, 0.73) 39.9%,
//         hsla(0, 0%, 0%, 0.655) 48.2%,
//         hsla(0, 0%, 0%, 0.577) 56.2%,
//         hsla(0, 0%, 0%, 0.497) 64%,
//         hsla(0, 0%, 0%, 0.417) 71.3%,
//         hsla(0, 0%, 0%, 0.337) 78.1%,
//         hsla(0, 0%, 0%, 0.259) 84.2%,
//         hsla(0, 0%, 0%, 0.186) 89.6%,
//         hsla(0, 0%, 0%, 0.117) 94.1%,
//         hsla(0, 0%, 0%, 0.054) 97.6%,
//         hsla(0, 0%, 0%, 0) 100%
//       );

//     >${Container}:first-of-type {
//         @media (min-width: 1100px) {
//             margin-top: -150px;
//         }
//     }

//     ${FeatureText}:{
//         margin-top: 15px;
//     }
// `

export const Entities = styled.div`
    display: flex;
    flex-direction: row;
`

export const Image = styled.img`
    border: 0;
    width: 100%;
    max-width: 300px;
    cursor: pointer;
    height: 160px;
    padding: 0;
    margin: 0;
    object-fit: cover;
`

export const Meta = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    padding: 20px;
    background-color: #0000008f;
`

export const Subtitle = styled.p`
    font-size: 15px;
    color: white;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 0;
    user-select: none;
    display: none;
`

export const Text = styled.p`
    margin-top: 5px;
    font-size: 10px;
    color: white;
    margin-bottom: 0;
    user-select: none;
    display: none;
    line-height: normal;
    `

    export const Item = styled.div`
    display: flex;
        flex-direction: column;
        margin-right: 5px;
        position: relative;
        cursor: pointer;
        transition: transform 0.4s;

        
        &:hover {
            transform: scale(1.1);
            z-index: 99;
        }
        
        @media (min-width: 1000px) {
            &:hover ${Meta}, &:hover ${Text}, &:hover ${Subtitle} {
                display: block;
                z-index: 100;
            }
        }
        
        &:first-of-type {
            margin-left: 56px;
            
            @media (max-width: 1000px) {
                margin-left: 30px;
            }
        }
        
        &:last-of-type {
            margin-right: 56px;
            
            @media (max-width: 1000px) {
                margin-right: 30px;
            }
        }
`

export const FeatureText = styled.p`
    font-size: 18px;
    color: white;
    font-weight: normal;
    margin: 0;

    @media (max-width: 800px) {
        line-height: 22px;
    }
`

export const Feature = styled.div`
    margin-top:20px;
    display: flex;
    flex-direction: row;
    background: url(${({ src }) => src});
    background-size: contain;
    position: relative;
    height: 360px;
    background-position-x: right;
    background-repeat: no-repeat;
    background-color: black;

    @media (max-width: 1000px) {
        height: auto;
        background-size: auto;
        
        ${Title} {
            font-size: 20px;
            line-height: 20px;
            margin-bottom: 10px;
        }
        ${FeatureText} {
            font-size: 14px;
        }
    }

`

export const FeatureTitle = styled(Title)`
    margin -left: 0;    
`

export const FeatureClose = styled.i`
    color: white;
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 30px;
    cursor: pointer;
    background-color: transparent;
    border: 0; 

    @media (max-width: 900px) {
        font-size: 20px;
`

export const Maturity = styled.div`
    background-color: ${({ rating }) => (rating >= 15 ? 'red' : 'green')};
    border-radius: 15px;
    width: 20px;
    padding: 5px;
    margin-top: 15px;
    text-align: center;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin-right: 10px;
    font-size: 12px;
`

export const Content = styled.div`
    margin: 56px;
    max-width: 500px;
    line-height: normal;

    @media (max-width: 1000px) {
        margin: 30px;
        max-width: none;
}

`

export const Group = styled.div`
    display: flex;
    flex-direction: ${({ flexDirection }) => (flexDirection === "row" ? "row" : "column")};
    ${({ alignItems }) => alignItems && `align-item: ${alignItems}`};
    ${({ margin }) => margin && `margin:${margin}`}

    >${Container}:first-of-type {
        @media (min-width: 1100px) {
            margin-top: -150px;
        }
    }

    ${FeatureText} {
        margin-top: 15px;
    }
`

// export const FeatureImageShadow =styled.div`
//     background-color:black;

    
//     position: relative;
//     // filter: blur(10px);

//     &:after{
//         position: absolute;
//         content: '';
//         width: 100%;
//         height: 100%;
//         top: 0;
//         left: 0;
//         // box-shadow:0px 0px 0px 10px #ffffff inset;
// }
// `

// export const FeatureImage =styled.img`
//     width:100%
//     max-width: 300px;
//     height: 300px;
//     object-fit: cover;
    

	

//     @media(max-width:900px) {
//         width:100%
//         max-width: 150px;
//         height: 200px;
//     }
// `


