import styled from 'styled-components'

export const SocialMedias = styled.div` 
    height: auto;
    overflow: hidden;
    /*padding-top: 5rem;*/
    padding-bottom: 5rem;
` 

export const Social = styled.div` 
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${ props => props.item === 1 ? '#3b5998' : ''}; 
    background: ${ props => props.item === 2 ? 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' : ''};
    background: ${ props => props.item === 3 ? '#0E76A8' : ''};
` 

export const Icon = styled.i` 
    width: 50px;
    height: 50px;
    background: #000000;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    float: left;
    margin-right: 10px;
    margin-top: 23px;

    &:hover {
        background: #ce0033;
    }
` 

export const SocialDesc = styled.p` 
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #ffffff; 
    float: left;
` 

export const Span = styled.span` 
    display: block;
    margin-bottom: 8px
` 

export const SpanInfo = styled.span` 
    font-weight: normal
` 

export const Li = styled.li` 
list-style: none;
` 

