import * as React from 'react';
import {Component} from 'react';
import {BlockMath as B, InlineMath as I, Tab as _,
		MultiLine, Line} from '../../components';
import {Spec, Algebraic, Axiomatic, Function, Operator, Operators, Post, Pre, Syntactic, Semantic, Sort, Sorts, Table, THead, TBody, Observation} from '../../components/specification';

export default class Tree extends Component{

	render(){
		return (
			<Spec
				name="Albero">
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
						<Operators>
							<Operator>
								<Function>
									<I>creaalbero() = T'</I>
								</Function>
								<Post>
									<I>T' = (\emptyset, \emptyset, \Lambda)</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>alberovuoto(T) = b</I>
								</Function>
								<Post>
									<I>b = vero</I> se <I>T=(\emptyset, \emptyset, \Lambda)</I>;
									<br />
									<_ depth={2}/><I>b = falso</I> altrimenti.
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>insradice(u,T)=T'</I>
								</Function>
								<Pre>
									<I>T=(\emptyset, \emptyset, \Lambda), u \neq \Lambda</I>
								</Pre>
								<Post>
									<I math="T'=(\{u\}, \emptyset, u)"/> e <I>livello(u)=0</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>radice(T)=T'</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset</I>
								</Pre>
								<Post>
									<I>u=r</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>padre(u, T) = v</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, A \neq \emptyset, u \in N, livello(u) > 0</I>,
									<br />
									<_ depth={2}/><I>\exists | w \in N t.c. (w,u) \in A</I>e<I>livello(w)=livello(u)-1</I>
								</Pre>
								<Post>
									<I>v=w</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>foglia(u,T)=b</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, A \neq \emptyset, u \in N</I>
								</Pre>
								<Post>
									<I>b = vero</I> se <I>\neg(\exists v \in N t.c. (u,v) \in A</I> e <I>livello(v)=livello(u)+1);</I>
									<br />
									<_ depth={2}/><I>b = falso</I> altrimenti.
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>primofiglio(u,T)=v</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, u \in N,</I>
									<br />
									<_ depth={2}/><I>\exists w \in N</I> tale che <I>(u,w) \in A</I> e <I>livello(w)=livello(u)+1</I> e
									<br />
									<_ depth={2}/><I>\forall w' \in N ((u,w') \in A \wedge w' \neq w ) \Rightarrow w &lt; w'</I>
								</Pre>
								<Post>
									v=w
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>finefratelli(u,T)=b</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, u \in N</I>
								</Pre>
								<Post>
									<I>b = vero, se \neg ( \exists v,w \in N (w,u) \in A \wedge (w,v) \in A \wedge u &lt; v );</I>
									<br />
									<_ depth={2}/><I>b = falso</I> altrimenti.
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>succfratello(u,T)=v</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, u \in N,</I>
									<br />
									<_ depth={2}/><I>\exists x,w \in N (w,u) \in A \wedge (w,x) \in A \wedge u &lt; x</I> <I>\wedge</I>
									<br />
									<_ depth={2}/><I>( \forall y \in N u &lt; y \wedge y \neq x \wedge (w,y) \in A \Rightarrow x &lt; y)</I>
								</Pre>
								<Post>
									<I>v=x</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>insprimosottoalbero(u,T,T')=T''</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, T'=(N,A,r), r' \neq \Lambda, N' \neq \emptyset, u \in N</I>
								</Pre>
								<Post>
									<I>T''</I> è ottenuto da <I>T</I> aggiungendovi l'albero <I>T'</I> la cui radice <I>r'</I>
									<br />
									<_ depth={2}/>diventa il primo figlio del nodo <I>u</I>, cioè <I>r' &lt; v</I> per ogni figlio <I>v</I>
									<br />
									<_ depth={2}/>di <I>u</I> in <I>T</I>.
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>inssottoalbero(u,T,T')=T''</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, T'=(N,A,r), r' \neq \Lambda, N' \neq \emptyset,</I><I math="u \in N - \{r\}"/>
								</Pre>
								<Post>
									<I>T''</I> è ottenuto da <I>T</I> aggiungendovi l'albero <I>T'</I> la cui radice <I>r'</I>
									<br />
									<_ depth={2}/>diventa il nuovo fratello che segue immediatamente <I>u</I> nella
									<br />
									<_ depth={2}/>relazione d'ordine, cioè <I>u &lt; r'</I> e non ci sono altri nodi <I>v</I> tali che
									<br />
									<_ depth={2}/><I>u &lt; v &lt; r'</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>cancsottoalbero(u,T)=T'</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, u \in N</I>
								</Pre>
								<Post>
									<I>T'</I> è ottenuto da <I>T</I> togliendovi il sottoalbero di radice <I>u</I>, cioè
									<br />
									<_ depth={2}/><I>u</I> stesso e tutti i discendenti di <I>u</I>.
								</Post>
							</Operator>
						</Operators>
					</Semantic>
				</Axiomatic>
				<Algebraic>
					<Semantic>
						<Table>
							<THead
								mainSort="t'"
								numberOfConstructors={3}>
									<I>creaalbero()</I>
									<I>insradice(u,t)</I>
									<I>insprimosottoalbero(u,t,s)</I>
								</THead>
							<TBody>
								<Observation>
									<I>alberovuoto(t')</I>
									<I>true</I>
									<I>false</I>
									<I>false</I>
								</Observation>
								<Observation>
									<I math="\grave{e}contenuto(v,t')" />
									<I>false</I>
									<I>v=u</I>
									<MultiLine>
										<Line>
											<I>if(v=u)</I>then
										</Line>
										<Line depth={1}>
											true
										</Line>
										<Line>
											else
										</Line>
										<Line depth={1}>
											<I math="\grave{e}contenuto(v,t)" />or<I math="\grave{e}contenuto(v,s)" />
										</Line>
									</MultiLine>
								</Observation>
								<Observation>
									<I>radice(t')</I>
									<I>error</I>
									<I>u</I>
									<I>radice(t)</I>
								</Observation>
								<Observation>
									<I>padre(v,t')</I>
									<I>error</I>
									<I>error</I>
									<MultiLine>
										<Line>
											if <I math="\grave{e}contenuto(v,s)" /> then
										</Line>
										<Line depth={1}>
											if <I>v = radice(s)</I> then
										</Line>
										<Line depth={2}>
											<I>u</I>
										</Line>
										<Line depth={1}>
											else
										</Line>
										<Line depth={2}>
											<I>padre(v,s)</I>
										</Line>
										<Line>
											else
										</Line>
										<Line depth={1}>
											if <I math="\grave{e}contenuto(v,t)" /> then
										</Line>
										<Line depth={2}>
											if <I>v=radice(t)</I> then
										</Line>
										<Line depth={3}>
											<I>error</I>
										</Line>
										<Line depth={2}>
											else
										</Line>
										<Line depth={3}>
											<I>padre(v,t)</I>
										</Line>
										<Line depth={1}>
											else
										</Line>
										<Line depth={2}>
											<I>error</I>
										</Line>
									</MultiLine>
								</Observation>
								<Observation>
									<I>foglia(v,t')</I>
									<I>error</I>
									<MultiLine>
										<I>if</I><I>v=u</I><I>then</I><br />
										<_ /><I>true</I><br />
										<I>else</I><br />
										<_ /><I>error</I>
									</MultiLine>
									<MultiLine>
										<I>if</I> <I>v=u</I> <I>then</I><br />
										<_ /><I>false</I><br />
										<I>else</I><br />
										<_ /><I>if</I> <I math="\grave{e}contenuto(v,t)" /> <I>then</I> <br />
										<_ depth={2}/><I>foglia(v,t)</I><br />
										<_ /><I>else</I><br />
										<_ depth={2}/><I>foglia(v,s)</I>

									</MultiLine>
								</Observation>
								<Observation>
									<I>primofiglio(v,t')</I>
									<I>error</I>
									<I>error</I>
									<MultiLine>
										<I>if(v=u)</I><I>then</I><br />
										<_ /><I>radice(s)</I><br />
										<I>else</I><br />
										<_ /><I math="if \grave{e}contenuto(v,s)" /><I>then</I><br />
										<_ depth={2}/><I>primofiglio(v,s)</I><br />
										<_ /><I>else</I><br />
										<_ depth={2}/><I>primofiglio(v,t)</I>
									</MultiLine>
								</Observation>
							</TBody>
						</Table>
					</Semantic>
				</Algebraic>
			</Spec>
		);
	}

}
