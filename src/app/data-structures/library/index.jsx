import * as React from 'react';
import {Component} from 'react';
import {InlineMath as I, MultiLine, Line, Comment} from '../../components';
import {Spec, Algebraic, Axiomatic,
        Function, Operator, Operators,
        Post, Pre, Syntactic, Semantic,
        Sort, Sorts, Table, THead, TBody,
        Declare, Observation} from '../../components/specification';
import * as MC from '../../math-constants';
import * as MS from '../../math-symbols';

export default class Library extends Component{
    render(){
        return (
            <Spec
                name="Biblioteca"
                file="Scritto20160208.pdf">
                <Axiomatic>
                    <Semantic>
                        <Sorts>
                            <Sort name="booleano">
                                insieme dei valori di verità {MC.BOOLEAN_SET}.
                            </Sort>
                            <Sort name="naturale">
								insieme {MC.MATHBB_N} dei numeri naturali.
                            </Sort>
							<Sort name="anno">
								insieme {MC.MATHBB_Z} dei numeri interi.
							</Sort>
							<Sort name="autore">
								insieme <I>A</I> degli autori.
								Ogni autore <I>a \in A</I> è una stringa definita sull'insieme <I>\Sigma^*</I>.
							</Sort>
							<Sort name="lista">
								insieme di liste.
								Ogni lista è una sequenza <I>{MS.LT}a_1,a_2,...,a_n{MS.GT}, n {MS.GT} 0</I> di elementi di tipo autore.<br />
								<I>\Lambda</I> denota la sequenza vuota.
							</Sort>
							<Sort name="titolo">
								insieme <I>T</I> dei titoli. Ogni titolo <I>t \in T</I> è una stringa definita sull'insieme <I>\Sigma^*</I>.
							</Sort>
							<Sort name="codice">
								insieme <I>C</I> dei codici. Su codice è definita la relazione d'uguaglianza <I>=</I> che predica se due codici sono uguali.
							</Sort>
							<Sort name="biblioteca">
								insieme degli elementi di tipo biblioteca.<br />
								Ogni elemento è un insieme <I>{MS.ESC_CURLY_O}(c_1,t_1,y_1,l_1,p_1),...,(c_n,t_n,y_n,l_n,p_n){MS.ESC_CURLY_C}, n {MS.GT} 0</I>
								di tuple <I>(c,t,y,l,p) \in C \times T \times {MS.MATHBB_Z} \times L \times {MS.BOOLEAN_SET}</I>.<br />
								<I>p</I> indica se il volume a cui fa riferimento è stato prestato o meno.
							</Sort>
                        </Sorts>
						<Operators>
							<Operator>
								<Function>
									<I>creaBiblioteca() = B</I>
								</Function>
								<Post>
									<I>B = \emptyset</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>bibliotecaVuota(B) = b</I>
								</Function>
								<Post>
									<I>b = vero</I> se <I>B = \emptyset;</I>
									<Line depth={2}>
										<I>b = falso</I> altrimenti.
									</Line>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>addVol(B,c,t,y) = B'</I>
								</Function>
								<Pre>
									<I>B = \emptyset \vee \neg (\exists t \in T, y \in {MS.MATHBB_Z}, l \in L, p \in {MS.BOOLEAN_SET}</I> t.c. <I> (c,t,y,l,p) \in B )</I>
								</Pre>
								<Post>
									<I>B' = {MS.ESC_CURLY_O}(c,t,y,\Lambda,false){MS.ESC_CURLY_C}</I> se <I>B = \emptyset</I>;
									<Line depth={2}>
										<I>B' = B \cup {MS.ESC_CURLY_O}(c,t,y,\Lambda,false){MS.ESC_CURLY_C}</I> altrimenti.
									</Line>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>addAut(B,c,a) = B'</I>
								</Function>
								<Pre>
									<I>\exists</I><I>t \in T, y \in {MS.MATHBB_Z}, l \in L, p \in {MS.BOOLEAN_SET}</I> t.c.
									<I>(c,t,y,l,p) \in B</I>
								</Pre>
								<Post>
									<I>B' = (B - {MS.ESC_CURLY_O}(c,t,y,l,p){MS.ESC_CURLY_C}) \cup {MS.ESC_CURLY_O}(c,t,y,l',p){MS.ESC_CURLY_C}</I> con
									<Line depth={2}>
										<I>( l' = {MS.LT}a{MS.GT}</I> se <I> l = \Lambda</I>;
										<I>l' = {MS.LT}a_1,...,a_n,a{MS.GT}, n {MS.GT} 0 </I> altrimenti <I>)</I>.
									</Line>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>titolo(B,c) = t'</I>
								</Function>
								<Pre>
									<I>\exists</I> <I>t \in T, y \in {MS.MATHBB_Z}, l \in L, p \in {MS.BOOLEAN_SET}</I>
								</Pre>
								<Post>
									<I>t' = t</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>autore(B,c) = l'</I>
								</Function>
								<Pre>
									<I>\exists</I> <I>t \in T, y \in {MS.MATHBB_Z}, l \in L, p \in {MS.BOOLEAN_SET}</I> t.c. <I>(c,t,y,l,p) \in B</I>
								</Pre>
								<Post>
									<I>l' = l</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>anno(B,c) = y'</I>
								</Function>
								<Pre>
									<I>\exists</I> <I>t \in T, y \in {MS.MATHBB_Z}, l \in L, p \in {MS.BOOLEAN_SET}</I> t.c. <I>(c,t,y,l,p) \in B</I>
								</Pre>
								<Post>
									<I>y' = y</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>prestito(B,c) = B'</I>
								</Function>
								<Pre>
									<I>\exists</I> <I>t \in T, y \in {MS.MATHBB_Z}, l \in L, p \in {MS.BOOLEAN_SET}</I> t.c. <I>(c,t,y,l,p) \in B</I>, <I>p = falso</I>
								</Pre>
								<Post>
									<I>B' = (B - {MS.ESC_CURLY_O}(c,t,y,l,p){MS.ESC_CURLY_C}) \cup ({MS.ESC_CURLY_O}(c,t,y,l,true){MS.ESC_CURLY_C})</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>prestato(B,c) = b</I>
								</Function>
								<Pre>
									<I>\exists</I> <I>t \in T, y \in {MS.MATHBB_Z}, l \in L, p \in {MS.BOOLEAN_SET}</I> t.c. <I>(c,t,y,l,p) \in B</I>
								</Pre>
								<Post>
									<I>b = p</I>
								</Post>
							</Operator>
							<Operator>
								<Function>
									<I>copie(B,y) = m</I>
								</Function>
								<Pre>
									<I>B = {MS.ESC_CURLY_O}(c_1,t_1,y_1,l_1,p_1),...,(c_n,t_n,y_n,l_n,p_n){MS.ESC_CURLY_C}</I>, <I>n {MS.GT} 0</I>
								</Pre>
								<Post>
									<I>m = |{MS.ESC_CURLY_O}(c,t,z,l,p) \in B | z = y{MS.ESC_CURLY_C}|</I>
								</Post>
							</Operator>
						</Operators>
                    </Semantic>
                </Axiomatic>
                <Algebraic>
                	<Semantic>
                		<Declare>
                			<I>B,B': biblioteca</I>, <I>c,c': codice</I>, <I>t: titolo</I>, <I>y,y': anno</I>, <I>a: autore</I>, <I>p: prestato</I>
                		</Declare>
                		<Comment>
                			Per la sorta <I>codice</I> è definito l'operatore infisso<br />
                			<I>=</I>: <I>codice \times codice \rightarrow booleano</I><br />
                			che predica se due codici sono uguali.<br /><br />
                			In ausilio alla definizione dell'operatore <I>autore(biblioteca, codice)</I>, sono definiti<br />
                			due operatori per la sorta ausiliaria <I>lista</I><br />
                			<I>newlist</I>: <I>\rightarrow lista</I><br />
                			<I>addList</I>: <I>autore \times lista \rightarrow lista</I><br />
                			che assolvono le funzioni di creazione di una lista e l'aggiunta di elementi a quest'ultima.
                		</Comment>
                		<Table>
                			<THead
                				mainSort="B'"
                				numberOfConstructors={4}>
                				<I>creaBiblioteca()</I>
                				<I>addVol(B,c,t,y)</I>
                				<I>addAut(B,c,a)</I>
                				<I>prestito(B,c)</I>
                			</THead>
                			<TBody>
                				<Observation>
                					<I>bibliotecaVuota(B')</I>
                					<I>true</I>
                					<I>false</I>
                					<I>false</I>
                					<I>false</I>
                				</Observation>
                				<Observation>
                					<I>titolo(B',c')</I>
                					<I>error</I>
                					<MultiLine>
                						<Line>if <I>c'=c</I> then</Line>
                						<Line depth={1}><I>t</I></Line>
                						<Line>else</Line>
                						<Line depth={1}><I>titolo(B,c')</I></Line>
                					</MultiLine>
                					<I>titolo(B,c')</I>
                					<I>titolo(B,c')</I>
                				</Observation>
                				<Observation>
                					<I>anno(B',c')</I>
                					<I>error</I>
                					<MultiLine>
                						<Line>if <I>c'=c</I> then</Line>
                						<Line depth={1}><I>y</I></Line>
                						<Line>else</Line>
                						<Line depth={1}><I>anno(B,c')</I></Line>
                					</MultiLine>
                					<I>anno(B,c')</I>
                					<I>anno(B,c')</I>
                				</Observation>
                				<Observation>
                					<I>autore(B',c')</I>
                					<I>error</I>
                					<MultiLine>
                						<Line>if <I>c'=c</I> then</Line>
                						<Line depth={1}><I>newList()</I></Line>
                						<Line>else</Line>
                						<Line depth={1}><I>autore(B,c')</I></Line>
                					</MultiLine>
                					<MultiLine>
                						<Line>if <I>c'=c</I> then</Line>
                						<Line depth={1}><I>addList(a,autore(B,c')</I></Line>
                						<Line>else</Line>
                						<Line depth={1}><I>autore(B,c')</I></Line>
                					</MultiLine>
                					<I>autore(B,c')</I>
                				</Observation>
                				<Observation>
                					<I>copie(B',y')</I>
                					<I>0</I>
                					<MultiLine>
                						<Line>if <I>y'=y</I> then</Line>
                						<Line depth={1}><I>1 + copie(B,y')</I></Line>
                						<Line>else</Line>
                						<Line depth={1}><I>copie(B,y')</I></Line>
                					</MultiLine>
                					<I>copie(B,y')</I>
                					<I>copie(B,y')</I>
                				</Observation>
                				<Observation>
                					<I>prestato(B',c')</I>
                					<I>error</I>
                					<I>false</I>
                					<I>prestato(B,c')</I>
                					<MultiLine>
                						<Line>if <I>c'=c</I> then</Line>
                						<Line depth={1}><I>true</I></Line>
                						<Line>else</Line>
                						<Line depth={1}><I>prestato(B,c')</I></Line>
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
