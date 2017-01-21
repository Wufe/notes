import * as React from 'react';
import {Component} from 'react';
import {BlockMath as B, InlineMath as I, Tab as T} from '../../components';
import {Spec, Axiomatic, Syntactic, Semantic, Sort, Sorts} from '../../components/specification';

export default class Tree extends Component{

	render(){
		return (
			<Spec
				name="Tree">
				<Axiomatic>
					<Semantic>
						<Sorts>
							<Sort
								name="booleano">
								insieme dei valori di verità <I math="\{vero, falso\}"></I>.
							</Sort>
							<Sort
								name="nodo">
								insieme <I math="\mathcal{N}"></I> dei possibili nodi. Λ indica il nodo <i>indefinito</i>.
							</Sort>
							<Sort
								name="albero">
								insieme<I math="\mathcal{T}"></I>degli alberi radicati ordinati.
								<br />
								Ogni albero radicato ordinato <I math="T \in \mathcal{T}"></I> è una terna <I>T = (N, A, r)</I>, dove<br />
								<I math="N \subseteq \mathcal{N} - \{\Lambda\}"></I>,<br />
								<I math="A \subseteq N \times N"></I>,<br />
								<I math="r \in N \cup \{ \Lambda \}"></I>,<br />
								dove ad ogni nodo <I>u \in N</I> è associato il valore intero <I>livello(u)</I>;<br />
								sui figli di ogni nodo <I>u \in N</I> è definita una relazione d'ordine totale <I math="<"></I>.
							</Sort>
						</Sorts>
						<div>
							<span><h4>Operatori:</h4></span>
							<ul>
								<li>
									<I>creaAlbero() = T'</I>
									<br />
									<i>Post</i>: <I>T' = (\emptyset, \emptyset, \Lambda)</I>
								</li>
								<li>
									<I>alberoVuoto(T) = b</I>
									<br />
									<i>Post</i>: <I>b = vero</I> se <I>T=(\emptyset, \emptyset, \Lambda)</I>;
									<br />
									<T /><T /><I>b = falso</I> altrimenti.
								</li>
								<li>
									<I>padre(u, T) = v</I>
									<br />
									<i>Pre</i>: <I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, A \neq \emptyset, u \in N, livello(u) > 0</I>,
									<br />
									<T /><T /><I>\exists | w \in N t.c. (w,u) \in A</I>e<I>livello(w)=livello(u)-1</I>
									<br />
									<i>Post</i>: <I>v=w</I>
								</li>
								<li>
									<I>foglia(u,T)=b</I>
									<br />
									<i>Pre:</i> <I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, A \neq \emptyset, u \in N</I>
									<br />
									<i>Post</i>: <I>b = vero</I> se <I>\neg(\exists v \in N t.c. (u,v) \in A</I> e <I>livello(v)=livello(u)+1);</I>
									<br />
									<T /><T /><I>b = falso</I> altrimenti.
								</li>
							</ul>
						</div>
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
											<I>if(v=u)</I><I>then</I>
											<br />
											<T /><I>true</I>
											<br />
											<I>else</I>
											<br />
											<T /><I>isin(v,t)</I><I>or</I><I>isin(v,s)</I>
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
											<I>if(v=u)</I><I>then</I>
											<br />
											<T /><I>radice(s)</I>
											<br />
											<I>else</I>
										</div>
										<div>
											<T /><I>if(isin(v,s))</I><I>then</I>
											<br />
											<T /><T /><I>primofiglio(v,s)</I>
											<br />
											<T /><I>else</I>
											<br />
											<T /><T /><I>primofiglio(v,t)</I>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</Semantic>
				</Axiomatic>
			</Spec>
		);
	}

}
