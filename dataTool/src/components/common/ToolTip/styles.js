import styled from 'styled-components';

// below CSS rules taken from this repo:
// https://kazzkiq.github.io/balloon.css

export const Container = styled.span`
  cursor: default;
  [data-balloon] {
    position: relative;
  }
  [data-balloon]:before,
  [data-balloon]:after {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    -khtml-opacity: 0;
    -moz-opacity: 0;
    opacity: 0;
    pointer-events: none;
    -webkit-transition: all 0.18s ease-out 0.18s;
    transition: all 0.18s ease-out 0.18s;
    bottom: 100%;
    left: 50%;
    position: absolute;
    z-index: 10;
    -webkit-transform: translate(-50%, 10px);
    -ms-transform: translate(-50%, 10px);
    transform: translate(-50%, 10px);
    -webkit-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;
  }
  [data-balloon]:after {
    background: rgba(17, 17, 17, 0.9);
    border-radius: 4px;
    color: #fff;
    content: attr(data-balloon);
    font-size: 12px;
    padding: .5em 1em;
    white-space: nowrap;
    margin-bottom: 11px;
  }
  [data-balloon]:before {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;
    background-size: 100% auto;
    height: 6px;
    width: 18px;
    content: "";
    margin-bottom: 5px;
  }
  [data-balloon]:hover:before,
  [data-balloon][data-balloon-visible]:before,
  [data-balloon]:hover:after,
  [data-balloon][data-balloon-visible]:after {
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    -khtml-opacity: 1;
    -moz-opacity: 1;
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  [data-balloon].font-awesome:after {
    font-family: FontAwesome;
  }
  [data-balloon][data-balloon-break]:after {
    white-space: pre;
  }
  [data-balloon-pos="down"]:before,
  [data-balloon-pos="down"]:after {
    bottom: auto;
    left: 50%;
    top: 100%;
    -webkit-transform: translate(-50%, -10px);
    -ms-transform: translate(-50%, -10px);
    transform: translate(-50%, -10px);
  }
  [data-balloon-pos="down"]:after {
    margin-top: 11px;
  }
  [data-balloon-pos="down"]:before {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;
    background-size: 100% auto;
    height: 6px;
    width: 18px;
    margin-top: 5px;
    margin-bottom: 0;
  }
  [data-balloon-pos="down"]:hover:before,
  [data-balloon-pos="down"][data-balloon-visible]:before,
  [data-balloon-pos="down"]:hover:after,
  [data-balloon-pos="down"][data-balloon-visible]:after {
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  [data-balloon-pos="left"]:before,
  [data-balloon-pos="left"]:after {
    bottom: auto;
    left: auto;
    right: 100%;
    top: 50%;
    -webkit-transform: translate(10px, -50%);
    -ms-transform: translate(10px, -50%);
    transform: translate(10px, -50%);
  }
  [data-balloon-pos="left"]:after {
    margin-right: 11px;
  }
  [data-balloon-pos="left"]:before {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;
    background-size: 100% auto;
    height: 18px;
    width: 6px;
    margin-right: 5px;
    margin-bottom: 0;
  }
  [data-balloon-pos="left"]:hover:before,
  [data-balloon-pos="left"][data-balloon-visible]:before,
  [data-balloon-pos="left"]:hover:after,
  [data-balloon-pos="left"][data-balloon-visible]:after {
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
  [data-balloon-pos="right"]:before,
  [data-balloon-pos="right"]:after {
    bottom: auto;
    left: 100%;
    top: 50%;
    -webkit-transform: translate(-10px, -50%);
    -ms-transform: translate(-10px, -50%);
    transform: translate(-10px, -50%);
  }
  [data-balloon-pos="right"]:after {
    margin-left: 11px;
  }
  [data-balloon-pos="right"]:before {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;
    background-size: 100% auto;
    height: 18px;
    width: 6px;
    margin-bottom: 0;
    margin-left: 5px;
  }
  [data-balloon-pos="right"]:hover:before,
  [data-balloon-pos="right"][data-balloon-visible]:before,
  [data-balloon-pos="right"]:hover:after,
  [data-balloon-pos="right"][data-balloon-visible]:after {
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
  [data-balloon-length]:after {
    white-space: normal;
  }
  [data-balloon-length="small"]:after {
    width: 80px;
  }
  [data-balloon-length="medium"]:after {
    width: 150px;
  }
  [data-balloon-length="large"]:after {
    width: 260px;
  }
  [data-balloon-length="xlarge"]:after {
    width: 90vw;
  }
  @media screen and (min-width: 768px) {
    [data-balloon-length="xlarge"]:after {
      width: 380px;
    }
  }
  [data-balloon-length="fit"]:after {
    width: 100%;
  }
`;
