import styled from "styled-components";



const DynamicBG = styled.div`
    background-image: url(${(props) => props.background});
    background-color: #00000069;
    background-blend-mode: soft-light;
    background-attachment: ${"fixed"};
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;
    
    export {DynamicBG}


/**
 * @param {:props.width = width = full style string}
 * @param {: props.gap = full style string}
 * @param {: props.gridColumns = full style string || props.numOfCol = number of grid}
 * 
 */
export const PageContainer = styled.div`
    width: ${(props) => props.width};
    display: flex;
    flex-wrap: no-wrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: 100vh;
    &::-webkit-scrollbar {
        width: 12px; /* width of the entire scrollbar */
        position: fixed;
    }
    &::-webkit-scrollbar-track {
        background: #00000050; /* color of the tracking area */
    }
    &::-webkit-scrollbar-thumb {
        background-color: #c5c5c5; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
    }
    @media (max-width: 992px) {
        overflow-x: hidden;
        flex-wrap: wrap;
        min-height: auto;
        height:auto;
    }
    @media (max-width: 900px) {
        overflow-y: auto;
        flex-wrap: wrap;
        min-height: auto;
    }
`;
/**
 *@param {: props.width == full style string}
 *@param {: resWidth == responsive width === full style string}
 */
export const PageSection = styled.div`
    min-width: ${(props) => props.width};
    background: ${props => props.bg};
    display: inline-block;
    @media (max-width: 800px) {
        width:${props => props.resWith}
    }
`;