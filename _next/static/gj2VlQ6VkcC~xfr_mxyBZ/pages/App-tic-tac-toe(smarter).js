(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{S4bv:function(e,t,a){"use strict";var s=a("0iUn"),n=a("sLSF"),r=a("MI3g"),i=a("a7VT"),u=a("Tit0"),l=a("q1tI"),o=a.n(l),c=(a("Q8kY"),function(e){function t(){return Object(s.default)(this,t),Object(r.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(n.default)(t,[{key:"render",value:function(){return o.a.createElement("button",{className:this.props.but,onClick:this.props.onClick,disabled:this.props.ending},this.props.value)}}]),t}(o.a.Component));t.a=c},cOcc:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/App-tic-tac-toe(smarter)",function(){var e=a("trwe");return{page:e.default||e}}])},trwe:function(e,t,a){"use strict";a.r(t);var s=a("0iUn"),n=a("sLSF"),r=a("MI3g"),i=a("a7VT"),u=a("AT/M"),l=a("Tit0"),o=a("q1tI"),c=a.n(o),d=a("S4bv"),h=(a("Q8kY"),function(e){function t(){return Object(s.default)(this,t),Object(r.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(n.default)(t,[{key:"renderSquare",value:function(e,t){var a=this;return c.a.createElement(d.a,{but:this.props.but(e,t),value:this.props.squares[e][t],onClick:function(){return a.props.onClick(e,t)},ending:this.props.ending})}},{key:"renderAllSquares",value:function(){for(var e=Array(20).fill(null),t=0;t<20;t++){for(var a=Array(20).fill(null),s=0;s<20;s++){var n=20*t+s,r=t,i=s;a.push(c.a.createElement("span",{key:n},this.renderSquare(r,i)))}e.push(c.a.createElement("div",{className:"board-row",key:n}," ",a))}return e}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,this.renderAllSquares()))}}]),t}(c.a.Component));function f(){for(var e=Array(20),t=0;t<20;t++){var a=Array(20).fill(null);e[t]=a}return e}var v=function(e){function t(e){var a;return Object(s.default)(this,t),(a=Object(r.default)(this,Object(i.default)(t).call(this,e))).state={squares:f(),mark:f(),xIsNext:!0,stepNumber:0,win:0,disable:!1,undomovex:Array(400).fill(0),undomovey:Array(400).fill(0),a:0,b:0,c:0,d:0,e:0},a.handleClick=a.handleClick.bind(Object(u.default)(a)),a.undo=a.undo.bind(Object(u.default)(a)),a.check=a.check.bind(Object(u.default)(a)),a.restart=a.restart.bind(Object(u.default)(a)),a.horizontal=a.horizontal.bind(Object(u.default)(a)),a.vertical=a.vertical.bind(Object(u.default)(a)),a.main_horizontal=a.main_horizontal.bind(Object(u.default)(a)),a.not_main_horizontal=a.not_main_horizontal.bind(Object(u.default)(a)),a}return Object(l.default)(t,e),Object(n.default)(t,[{key:"undo",value:function(){var e=this.state.squares.slice(),t=this.state.undomovex.slice(),a=this.state.undomovey.slice(),s=this.state.stepNumber,n=t[s],r=a[s];e[n][r]=null;var i=!this.state.xIsNext;(s-=1)>=0&&this.setState({squares:e,xIsNext:i,stepNumber:s})}},{key:"handleClick",value:function(e,t){var a,s=this.state.squares.slice(),n=this.state.undomovex.slice(),r=this.state.undomovey.slice(),i=this.state.stepNumber+1;null===s[e][t]&&(this.state.xIsNext?s[e][t]="X":s[e][t]="O",n[i]=e,r[i]=t,this.setState({squares:s,xIsNext:!this.state.xIsNext,stepNumber:this.state.stepNumber+1,undomovex:n,undomovey:r})),a=this.state.xIsNext?"X":"O",(this.horizontal(e,t)||this.vertical(e,t)||this.main_horizontal(e,t)||this.not_main_horizontal(e,t))&&this.setState({disable:!0,win:a})}},{key:"check",value:function(e,t){return"X"===this.state.squares.slice()[e][t]?"square":"square3"}},{key:"horizontal",value:function(e,t){for(var a=this.state.squares.slice(),s=0,n=0,r=t-1;r>=0&&a[e][r]===a[e][t];r--)s++;for(var i=t+1;i<20&&a[e][i]===a[e][t];i++)n++;return s+n+1>=5}},{key:"vertical",value:function(e,t){for(var a=this.state.squares.slice(),s=0,n=0,r=e-1;r>=0&&a[r][t]===a[e][t];r--)s++;for(var i=e+1;i<20&&a[i][t]===a[e][t];i++)n++;return s+n+1>=5}},{key:"main_horizontal",value:function(e,t){for(var a=this.state.squares.slice(),s=0,n=0,r=e,i=t;r>0&&i>0&&(i--,a[--r][i]===a[e][t]);)s++;for(r=e,i=t;r<19&&i<19&&(i++,a[++r][i]===a[e][t]);)n++;return s+n+1>=5}},{key:"not_main_horizontal",value:function(e,t){for(var a=this.state.squares.slice(),s=0,n=0,r=e,i=t;r>0&&i<19&&(i++,a[--r][i]===a[e][t]);)s++;for(r=e,i=t;r<19&&i>0&&(i--,a[++r][i]===a[e][t]);)n++;return s+n+1>=5}},{key:"restart",value:function(){var e=this.state.squares.slice(),t=this.state.undomovex.slice(),a=this.state.undomovey.slice(),s=this.state.stepNumber;this.state.xIsNext;for(var n=0;n<20;n++)for(var r=0;r<20;r++)e[n][r]=null;for(var i=0;i<400;i++)t[i]=0,a[i]=0;this.setState({squares:e,undomovex:t,undomovey:a,xIsNext:!0,stepNumber:s,disable:!1})}},{key:"render",value:function(){var e,t=this,a=this.state.squares.slice(),s=this.state.disable;return e=this.state.disable?"Winner is: "+this.state.win:400===this.state.stepNumber?"Draw game":"Next player is: "+(this.state.xIsNext?"X":"O"),c.a.createElement("div",{align:"center"},c.a.createElement("button",{onClick:this.restart},"Restart"),c.a.createElement("div",{className:"game"},c.a.createElement(h,{but:function(e,a){return t.check(e,a)},squares:a,onClick:function(e,a){return t.handleClick(e,a)},ending:s})),c.a.createElement("button",{onClick:this.undo,disabled:s},"Undo"),c.a.createElement("div",{className:"game-info"},c.a.createElement("p",null,e)))}}]),t}(c.a.Component);t.default=v}},[["cOcc",1,0]]]);