import * as React from 'react';
import {Component} from 'react';
import {InlineMath as I, MultiLine, Line, Comment} from '../../components';
import {Spec, Algebraic, Axiomatic,
        Function, Operator, Operators,
        Post, Pre, Syntactic, Semantic,
        Sort, Sorts, Table, THead, TBody,
        Declare, Observation} from '../../components/specification';
import * as MC from '../../math-constants';

export default class Trie extends Component{
    render(){
        return (
            <Spec
                name="Trie">
                <Axiomatic>
                    <Semantic>
                        <Sorts>
                            <Sort
                                name="booleano">
                                insieme dei valori di verità {MC.BOOLEAN_SET}.
                            </Sort>
                            <Sort
                                name="intero">
                                insieme {MC.MATHBB_Z} dei numeri interi.
                            </Sort>
                            <Sort
                                name="stringa">
                                insieme {MC.MATHCAL_S} delle stringhe.<br />
                                Ogni stringa <I>S \in</I>{MC.MATHCAL_S} è una sequenza di caratteri di tipo <I>\Sigma</I>.<br />
                                <I>\Lambda</I> indica la stringa vuota.<br />
                                Sulla sorta stringa è definita la relazione d'ordine totale <I>\leq</I> che predica se una stringa precede lessicograficamente un'altra stringa.
                            </Sort>
                            <Sort
                                name="lista">
                                insieme delle liste.<br />
                                Ogni lista è una sequenza di elementi di tipo stringa.<br />
                                <I>\Lambda</I> indica la lista vuota.
                            </Sort>
                            <Sort
                                name="trie">
                                insieme di trie.<br />
                                Ogni trie <I>T \in</I>{MC.MATHCAL_T} è un insieme di elementi di tipo stringa.
                            </Sort>
                        </Sorts>
                        <Operators>
                            <Operator>
                                <Function>
                                    <I>creaTrie() = T</I>
                                </Function>
                                <Post>
                                    <I>T = \emptyset</I>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>inserisci(T,s)=T'</I>
                                </Function>
                                <Pre>
                                    <I>s \notin T</I>
                                </Pre>
                                <Post>
                                    <I>T' = T</I><I>\cup</I>{MC.SINGLETON_S} se <I>T \neq \emptyset;</I>
                                    <Line depth={2}>
                                        <I>T'=</I>{MC.SINGLETON_S} altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>trova(T,s)=b</I>
                                </Function>
                                <Post>
                                    <I>b = true</I>se<I>s \in T</I>;
                                    <Line depth={2}>
                                        <I>b = false</I> altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>nuovo(T) = b</I>
                                </Function>
                                <Post>
                                    <I>b = true</I>se<I>T = \emptyset</I>;
                                    <Line depth={2}>
                                        <I>b = false</I> altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>primo(T) = s</I>
                                </Function>
                                <Pre>
                                    <I>T \neq \emptyset</I> e <I>\exists | x \in T</I>t.c.
                                    <I>\forall y \in T -</I>{MC.SINGLETON_X} <I>x \leq y</I>
                                </Pre>
                                <Post>
                                    <I>s=x</I>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>tutte(T) = l</I>
                                </Function>
                                <Post>
                                    <I>l = \Lambda</I>se<I>T = \emptyset</I>;
                                    <Line depth={2}>
                                        <I>l = &lt; s_1, s_2,..., s_n &gt;, n &gt; 0</I> e
                                    </Line>
                                    <Line depth={2}>
                                        <I>\forall x \in T \Rightarrow \exists | i</I>{MC.TO_N_SET} <I>s_i = x_i</I>, altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>dimensione(T)=n</I>
                                </Function>
                                <Post>
                                    <I>n = 0</I>se<I>T = \emptyset</I>;
                                    <Line depth={2}>
                                        <I>n = |T|</I> altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>prefisso(T,s) = l</I>
                                </Function>
                                <Pre>
                                    <I>T \neq \emptyset, s = &lt; y_1, ..., y_k &gt;, k > 0</I>
                                </Pre>
                                <Post>
                                    <I>l = \Lambda</I> se <I>\forall x \in T, x = &lt; x_1, ..., x_j &gt;, j > 0</I><I>( j &lt; n ) \vee \exists i</I>{MC.TO_N_SET}t.c.<I>x_k \neq y_k</I>;
                                    <Line depth={2}>
                                        <I>l = &lt; s_1, ..., s_n &gt;, n > 0</I> e
                                    </Line>
                                    <Line depth={2}>
                                        <I>\forall x \in T, x = &lt; x_1, ..., x_j &gt;, j > 0</I>
                                    </Line>
                                    <Line depth={2}>
                                        <I>((n \leq j \wedge \forall i</I>{MC.TO_N_SET}<I>x_i = y_i ) \Rightarrow \exists | m</I>{MC.TO_N_SET} t.c. <I> s_m=x)</I>, altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                        </Operators>
                    </Semantic>
                </Axiomatic>
                <Algebraic>
                    <Semantic>
                        <Declare>
                            <I>t,t':trie,</I> <I>s,s': stringa</I>
                        </Declare>
                        <Comment>
                            Per la sorta stringa è definito l'operatore<br />
                            <I>primiCaratteri(intero,stringa) \rightarrow stringa</I><br />
                            che restituisce i primi <I>n</I> caratteri della stringa nel secondo parametro, dove <I>n</I> è il primo parametro.
                            <br /><br />
                            Sono inoltre definiti due operatori d'ausilio alla creazione e all'utilizzo di elementi di tipo lista.<br />
                            La lista conterrà elementi di tipo stringa.<br />
                            <I>newList() \rightarrow lista</I><br />
                            che crea una lista vuota, <br />
                            <I>addList(stringa, lista) \rightarrow lista</I><br />
                            che aggiunge un elemento di tipo stringa alla stringa.
                        </Comment>
                        <Table>
                            <THead
                                mainSort="t'"
                                numberOfConstructors={2}>
                                <I>creaTrie</I>
                                <I>inserisci(t,s)</I>
                            </THead>
                            <TBody>
                                <Observation>
                                    <I>nuovo(t')</I>
                                    <I>true</I>
                                    <I>false</I>
                                </Observation>
                                <Observation>
                                    <I>dimensione(t')</I>
                                    <I>0</I>
                                    <I>1+dimensione(t)</I>
                                </Observation>
                                <Observation>
                                    <I>trova(t',s')</I>
                                    <I>false</I>
                                    <MultiLine>
                                        <Line>
                                            if<I>s=s'</I>then
                                        </Line>
                                        <Line depth={1}>
                                            <I>true</I>
                                        </Line>
                                        <Line>
                                            else
                                        </Line>
                                        <Line depth={1}>
                                            <I>trova(t,s')</I>
                                        </Line>
                                    </MultiLine>
                                </Observation>
                                <Observation>
                                    <I>primo(t')</I>
                                    <I>error</I>
                                    <MultiLine>
                                        <Line>
                                            if <I>dimensione(t) = 0</I> then
                                        </Line>
                                        <Line depth={1}>
                                            <I>s</I>
                                        </Line>
                                        <Line>
                                            <I>else</I>
                                        </Line>
                                        <Line depth={1}>
                                            if <I>s \leq primo(t)</I> then
                                        </Line>
                                        <Line depth={2}>
                                            <I>s</I>
                                        </Line>
                                        <Line depth={1}>
                                            else
                                        </Line>
                                        <Line depth={2}>
                                            <I>primo(t)</I>
                                        </Line>
                                    </MultiLine>
                                </Observation>
                                <Observation>
                                    <I>tutte(t')</I>
                                    <I>newlist</I>
                                    <I>addList(s, tutte(t))</I>
                                </Observation>
                                <Observation>
                                    <I>prefisso(t',s')</I>
                                    <I>error</I>
                                    <MultiLine>
                                        <Line>
                                            if <I>dimensione(t) = 0</I> then
                                        </Line>
                                        <Line depth={1}>
                                            <I>newList()</I>
                                        </Line>
                                        <Line>
                                            else
                                        </Line>
                                        <Line depth={1}>
                                            if <I>dimensione(s') &lt; dimensione(s)</I> and <I>primiCaratteri(dimensione(s'), s) = s'</I> then
                                        </Line>
                                        <Line depth={2}>
                                            <I>addList(s, prefisso(t,s'))</I>
                                        </Line>
                                        <Line depth={1}>
                                            else
                                        </Line>
                                        <Line depth={2}>
                                            <I>prefisso(t,s')</I>
                                        </Line>
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
