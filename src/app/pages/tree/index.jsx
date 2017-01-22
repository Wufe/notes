import * as React from 'react';
import {Component} from 'react';
import {BlockMath as B, InlineMath as I, Tab as T} from '../../components';
import {Spec, Algebraic, Axiomatic, Function, Operator, Operators, Post, Pre, Syntactic, Semantic, Sort, Sorts, Table, THead, TBody, Observation} from '../../components/specification';

const _ = T;

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
									<T /><T /><I>b = falso</I> altrimenti.
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
									<T /><T /><I>\exists | w \in N t.c. (w,u) \in A</I>e<I>livello(w)=livello(u)-1</I>
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
									<T /><T /><I>b = falso</I> altrimenti.
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>primofiglio(u,T)=v</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, u \in N,</I>
									<br />
									<T /><T /><I>\exists w \in N</I> tale che <I>(u,w) \in A</I> e <I>livello(w)=livello(u)+1</I> e
									<br />
									<T /><T /><I>\forall w' \in N ((u,w') \in A \wedge w' \neq w ) \Rightarrow w &lt; w'</I>
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
									<T /><T /><I>b = falso</I> altrimenti.
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>succfratello(u,T)=v</I>
								</Function>
								<Pre>
									<I>T=(N,A,r), r \neq \Lambda, N \neq \emptyset, u \in N,</I>
									<br />
									<T /><T /><I>\exists x,w \in N (w,u) \in A \wedge (w,x) \in A \wedge u &lt; x</I> <I>\wedge</I>
									<br />
									<T /><T /><I>( \forall y \in N u &lt; y \wedge y \neq x \wedge (w,y) \in A \Rightarrow x &lt; y)</I>
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
									<T /><T />diventa il primo figlio del nodo <I>u</I>, cioè <I>r' &lt; v</I> per ogni figlio <I>v</I>
									<br />
									<T /><T />di <I>u</I> in <I>T</I>.
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
									<T /><T />diventa il nuovo fratello che segue immediatamente <I>u</I> nella
									<br />
									<T /><T />relazione d'ordine, cioè <I>u &lt; r'</I> e non ci sono altri nodi <I>v</I> tali che
									<br />
									<T /><T /><I>u &lt; v &lt; r'</I>
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
									<T /><T /><I>u</I> stesso e tutti i discendenti di <I>u</I>.
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
									<I math="\grave{e}Contenuto(v,t')" />
									<I>false</I>
									<I>v=u</I>
									<div>
										<I>if(v=u)</I><I>then</I><I>true</I>
										<br />
										<I>else</I><I>isin(v,t)</I><I>or</I><I>isin(v,s)</I>
									</div>
								</Observation>
								<Observation>
									<I>radice(t')</I>
									<I>error</I>
									<I>u</I>
									<I>radice(t)</I>
								</Observation>
								<Observation>
									<I>parent(v,t')</I>
									<I>error</I>
									<I>error</I>
									<div style={{
										textAlign: "left"
									}}>
										<I>if</I> <I math="\grave{e}Contenuto(v,s)" /> <I>then</I><br />
										<_ /><I>if</I> <I>v = root(s)</I> <I>then</I><br />
										<_ /><_ /><I>u</I><br />
										<_ /><I>else</I><br />
										<_ /><_ /><I>parent(v,s)</I><br />
										<I>else</I><br />
										<_ /><I>if</I> <I math="\grave{e}Contenuto(v,t)" /> <I>then</I><br />
										<_ /><_ /><I>if</I> <I>v=root(t)</I> <I>then</I><br />
										<_ /><_ /><_ /><I>error</I><br />
										<_ /><_ /><I>else</I><br />
										<_ /><_ /><_ /><I>parent(v,t)</I><br />
										<_ /><I>else</I><br />
										<_ /><_ /><I>error</I><br />

									</div>
								</Observation>
								<Observation>
									<I>primoFiglio(v,t')</I>
									<I>error</I>
									<I>error</I>
									<div>
										<I>if(v=u)</I><I>then</I><I>radice(s)</I>
										<br />
										<I>else</I>
										<br />
										<I>if(isin(v,s))</I><I>then</I><I>primofiglio(v,s)</I>
										<br />
										<I>else</I><I>primofiglio(v,t)</I>
									</div>
								</Observation>
							</TBody>
						</Table>
					</Semantic>
				</Algebraic>
			</Spec>
		);
	}

}
