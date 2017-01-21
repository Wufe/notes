import * as React from 'react';
import {Component} from 'react';
import {BlockMath as B, InlineMath as I} from 'react-katex';

export default class Tree extends Component{

	render(){
		return (
			<div>
				<table>
					<thead>
						<tr>
							<td rowSpan={2}>Osservazioni</td>
							<td colSpan={3}>Costruttori di <I>t'</I></td>
						</tr>
						<tr>
							<td><I>creaAlbero()</I></td>
							<td><I>insRadice(u,t)</I></td>
							<td><I>insPrimoSottoAlbero(u,t,s)</I></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><I>alberoVuoto(t')</I></td>
							<td><I>true</I></td>
							<td><I>false</I></td>
							<td><I>false</I></td>
						</tr>
						<tr>
							<td><I>isIn(v,t')</I></td>
							<td><I>false</I></td>
							<td><I>v=u</I></td>
							<td style={{
								textAlign: 'left'
							}}>
								<div>
									<I>if(v=u)</I>&nbsp;&nbsp;<I>then</I>
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;<I>true</I>
									<br />
									<I>else</I>
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;<I>isin(v,t)</I>&nbsp;&nbsp;<I>or</I>&nbsp;&nbsp;<I>isin(v,s)</I>
								</div>
							</td>
						</tr>
						<tr>
							<td><I>primoFiglio(v,t')</I></td>
							<td><I>error</I></td>
							<td><I>error</I></td>
							<td style={{
								textAlign: 'left'
							}}>
								<div>
									<I>if(v=u)</I>&nbsp;&nbsp;<I>then</I>
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;<I>radice(s)</I>
									<br />
									<I>else</I>
								</div>
								<div>
									&nbsp;&nbsp;&nbsp;&nbsp;<I>if(isin(v,s))</I>&nbsp;&nbsp;<I>then</I>
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<I>primofiglio(v,s)</I>
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;<I>else</I>
									<br />
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<I>primofiglio(v,t)</I>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}

}