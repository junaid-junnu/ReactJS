// import React, {useRef} from 'react';

// const App = () => {

//     const textInput = useRef(null);

// 	var cntline;
	
// 	const keyup =(obj, e) =>
// 	{
// 		if(e.keyCode >= 33 && e.keyCode <= 40) // arrows ; home ; end ; page up/down
// 		{
// 			selectionchanged(obj, e.keyCode);
// 		}	
// 	};
	
// 	const selectionchanged = (obj) =>
// 	{
// 		var substr = obj.value.substring(0,obj.selectionStart).split('\n');
// 		var row = substr.length;
// 		var col = substr[substr.length-1].length;
// 		var tmpstr = '(' + row.toString() + ',' + col.toString() + ')';
// 		// if selection spans over 
// 		if(obj.selectionStart != obj.selectionEnd)
// 		{
// 			substr = obj.value.substring(obj.selectionStart, obj.selectionEnd).split('\n');
// 			row += substr.length - 1;
// 			col = substr[substr.length-1].length;
// 			tmpstr += ' - (' + row.toString() + ',' + col.toString() + ')';
// 		}
// 		obj.parentElement.getElementsByTagName('input')[0].value = tmpstr;
// 	}
	
// 	const input_changed = (obj_txt)=>
// 	{
// 		let obj_rownr = obj_txt.parentElement.parentElement.getElementsByTagName('textarea')[0];
// 		cntline = count_lines(obj_txt.value);
// 		if(cntline == 0) cntline = 1;
// 		let tmp_arr = obj_rownr.value.split('\n');
// 		let cntline_old = parseInt(tmp_arr[tmp_arr.length - 1], 10);
// 		// if there was a change in line count
// 		if(cntline != cntline_old)
// 		{
// 			obj_rownr.cols = cntline.toString().length; // new width of txt_rownr
// 			populate_rownr(obj_rownr, cntline);
// 			scroll_changed(obj_txt);
// 		}
// 		selectionchanged(obj_txt);
// 	}
	
// 	const scroll_changed = (obj_txt)=>
// 	{
// 		let obj_rownr = obj_txt.parentElement.parentElement.getElementsByTagName('textarea')[0];
// 		scrollsync(obj_txt,obj_rownr);
// 	}
	
// 	const scrollsync =(obj1, obj2)=>
// 	{
// 		// scroll text in object id1 the same as object id2
// 		obj2.scrollTop = obj1.scrollTop;
// 	}
	
// 	const populate_rownr =(obj, cntline)=>
// 	{
// 		let tmpstr = '';
// 		for( let i = 1; i <= cntline; i++)
// 		{
// 			tmpstr = tmpstr + i.toString() + '\n';
// 		}
// 		obj.value = tmpstr;
// 	}
	
// 	const count_lines = (txt)=>
// 	{
// 		if(txt == '')
// 		{
// 			return 1;
// 		}
// 		return txt.split('\n').length + 1;
// 	}
	
//     return (
//       <>
//        <div>
// 		<textarea class="rownr" rows="20" cols="3" value="1" readonly></textarea>
// 		<span>
        
// 			<textarea class="txt" rows="20" cols="150" nowrap="nowrap" wrap="off"
// 			autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
//             ref={textInput} 
// 			onClick={()=>{
// 				console.log('onclick');
// 				selectionchanged(textInput.current)
// 			}}
// 			 onKeyUp={(event)=>{ 
// 				console.log('onkeyup');
// 				keyup(textInput.current, event)        
//             }}
// 			 onInput={()=>{
// 				console.log('oninput');
// 				input_changed(textInput.current) 
// 			 }}
// 			onScroll={()=>{
// 				console.log('onscroll');
// 				scroll_changed(textInput.current)
// 			}}></textarea>
				
// 		</span>
// 	</div>
//       </>
//     )
//   }
  
//   export default App;
  
//   // Destructure Code..

//   import React, { useRef, useEffect } from "react";
// import "./App.css";

// const App = () => {
// 	const textInput = useRef(null);
// 	const testStr = "Hello, World,\n and alu beautiful people in it!";

// 	let cntline;

// 	const input_changed = (obj_txt) => {
// 		let obj_rownr =
// 			obj_txt.parentElement.parentElement.getElementsByTagName("textarea")[0];
// 		cntline = count_lines(obj_txt.value);

// 		let tmp_arr = obj_rownr.value.split("\n");

// 		let cntline_old = parseInt(tmp_arr[tmp_arr.length - 1], 10);

// 		if (cntline != cntline_old) {
// 			obj_rownr.cols = cntline.toString().length; // new width of txt_rownr
// 			populate_rownr(obj_rownr, cntline);
// 			scroll_changed(obj_txt);
// 		}
// 	};

// 	const scroll_changed = (obj_txt)=>
// 	{
// 		let obj_rownr = obj_txt.parentElement.parentElement.getElementsByTagName('textarea')[0];
// 		scrollsync(obj_txt,obj_rownr);
// 	}
	
// 	const scrollsync =(obj1, obj2)=>
// 	{
// 		// scroll text in object id1 the same as object id2
// 		obj2.scrollTop = obj1.scrollTop;
// 	}

// 	const populate_rownr = (obj, cntline) => {
		
// 		let tmpstr = '';

// 		for (let i = 1; i <= cntline; i++) {
// 			tmpstr = tmpstr + i.toString() + "\n";
// 		}
// 		obj.value = tmpstr;
// 	};

// 	const count_lines = (txt) => {
// 		if (txt == "") {
// 			return 0;
// 		}
// 		return txt.split("\n").length;
// 	};
// 	useEffect(() => {
// 		input_changed(textInput.current);
// 	}, []);

// 	return (
// 		<>
// 			<div style={{ position: "relative", minWidth: "30px", zIndex: 1 }}>
// 				<textarea
// 					style={{ position: "absolute", zIndex: 5 }}
// 					className="rownr"
// 					rows="20"
// 					cols="3"
// 					value="1"
// 					readonly
// 				></textarea>
// 				<span>
// 					<textarea
// 						style={{ paddingLeft: "35px" }}
// 						className="txt"
// 						rows="20"
// 						cols="30"
// 						nowrap="nowrap"
// 						wrap="off"
// 						autocomplete="off"
// 						autocorrect="off"
// 						autocapitalize="off"
// 						spellcheck="false"
// 						ref={textInput}
// 						onInput={() => {
// 							input_changed(textInput.current);
// 						}}
// 						onScroll={() => {
// 							scroll_changed(textInput.current)
// 						}}
// 					>
// 						{testStr}
// 					</textarea>
// 				</span>
// 			</div>
// 		</>
// 	);
// };

// export default App;
