import * as React from 'react';
import {Component} from 'react';
import {InlineMath as I, MultiLine, Line, Comment} from '../../components';
import {Spec, Algebraic, Axiomatic,
        Function, Operator, Operators,
        Post, Pre, Syntactic, Semantic,
        Sort, Sorts, Table, THead, TBody,
        Declare, Observation} from '../../components/specification';
import * as MC from '../../math-constants';

export default class PriorityQueue extends Component{
    render(){
        return (
            <Spec
                name="Coda con priorità">
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
                                name="priorità">
                                insieme dei numeri interi positivi {MC.MATHBB_N_PLUS}.<br />
                                Su {MC.MATHBB_N_PLUS} è definita la consueta relazione d'ordine totale <I>\leq</I>.
                            </Sort>
                            <Sort
                                name="item">
                                insieme <I>I</I> degli elementi di tipo item.
                            </Sort>
                            <Sort
                                name="pq">
                                insieme {MC.MATHCAL_P} delle code con priorità.<br />
                                Ogni <I>P \in</I>{MC.MATHCAL_P} è una sequenza <I>&lt;a_1,a_2,...,a_n&gt;</I> di elementi di tipo <I>item</I>.<br />
                                L'i-esimo elemento della sequenza ha valore <I>a_i \in I</I> e <I>pr(a_i) \in</I>{MC.MATHBB_N_PLUS}.<br />
                                <I>\Lambda</I> indica la sequenza vuota.
                            </Sort>
                        </Sorts>
                        <Operators>
                            <Operator>
                                <Function>
                                    <I>newPQ() = P</I>
                                </Function>
                                <Post>
                                    <I>P = \Lambda</I>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>isNew(P)=b</I>
                                </Function>
                                <Post>
                                    <I>b = vero</I> se <I>P = \Lambda;</I>
                                    <Line depth={2}>
                                        <I>b = falso</I> altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>insert(P,a,p) = P'</I>
                                </Function>
                                <Pre>
                                    <I>P = &lt;a_1,a_2,...,a_n&gt;, n &gt; 0</I> oppure <I>P = \Lambda</I>;
                                    <Line depth={2}>
                                        <I>a \notin P</I>
                                    </Line>
                                </Pre>
                                <Post>
                                    <I>P' = &lt;a&gt;,</I><I>pr(a)=p</I> se <I>P = \Lambda</I>;
                                    <Line depth={2}>
                                        <I>P' = &lt;a_1,a_2,...,a_n,a&gt;,</I><I>pr(a)=p</I> se <I>P \neq \Lambda</I>.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>getPriority(P,a) = p</I>
                                </Function>
                                <Pre>
                                    <I>P = &lt;a_1,a_2,...,a_n&gt;, n &gt; 0 \wedge a \in P</I>
                                </Pre>
                                <Post>
                                    <I>p = pr(a)</I>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>first(P) = a</I>
                                </Function>
                                <Pre>
                                    <I>P = &lt;a_1,a_2,...,a_n&gt;, n &gt; 0 \wedge</I>
                                    <Line depth={2}>
                                        <I>\exists a_x, x \in [1,n]</I> t.c. <I>\forall i \in [1,n]</I><I>a_i \neq a_x \Rightarrow pr(a_x) \leq pr(a_i)</I>
                                    </Line>
                                </Pre>
                                <Post>
                                    <I>a = a_x</I>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>delFirst(P) = P'</I>
                                </Function>
                                <Pre>
                                    <I>P = &lt;a_1,a_2,...,a_n&gt;, n &gt; 0 \wedge</I>
                                    <Line depth={2}>
                                        <I>\exists a_x, x \in [1,n]</I> t.c. <I>\forall i \in [1,n]</I><I>a_i \neq a_x \Rightarrow pr(a_x) \leq pr(a_i)</I>
                                    </Line>
                                </Pre>
                                <Post>
                                    <I>P' = \Lambda</I> se <I>n=1</I>;
                                    <Line depth={2}>
                                        <I math="P' = <a_1, a_2, ..., a_{x-1}, a_{x+1}, ..., a_n>" /> altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>changePriority(P,a,p) = P'</I>
                                </Function>
                                <Pre>
                                    <I>P = &lt;a_1,a_2,...,a_n&gt;, n &gt; 0 \wedge a \in P</I>
                                </Pre>
                                <Post>
                                    <I>P' = P</I> con <I>pr(a) = p</I>.
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>size(P) = n</I>
                                </Function>
                                <Post>
                                    <I>n = 0</I> se <I>P = \Lambda</I>;
                                    <Line depth={2}>
                                        <I>n = |P|</I> altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>equal(P,P') = b</I>
                                </Function>
                                <Pre>
                                    <I>(P = \Lambda \vee P = &lt; a_1, a_2, ..., a_n &gt;, n &gt; 0) \wedge</I>;
                                    <Line depth={2}>
                                        <I>(P' = \Lambda \vee P' = &lt; a'_1, a'_2, ..., a'_m &gt;, m &gt; 0)</I>
                                    </Line>
                                </Pre>
                                <Post>
                                    <I>b = vero</I> se <I>\forall i \in [1,n]</I><I>\exists j \in [1,m]</I> t.c. <I>a_i = a'_m</I>;
                                    <Line depth={2}>
                                        <I>b = falso</I> altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                        </Operators>
                    </Semantic>
                </Axiomatic>
                <Algebraic>
                    <Semantic>
                        <Declare>
                            <I>P,P',P'': pq,</I> <I>a,a': item,</I> <I>p,p':</I><I math="priorit\grave{a}" />
                        </Declare>
                        <Table>
                            <THead
                                mainSort="P'"
                                numberOfConstructors={2}>
                                <I>newPQ()</I>
                                <I>insert(P,a,p)</I>
                            </THead>
                            <TBody>
                                <Observation>
                                    <I>isNew(P')</I>
                                    <I>true</I>
                                    <I>false</I>
                                </Observation>
                                <Observation>
                                    <I>getPriority(P',a')</I>
                                    <I>error</I>
                                    <MultiLine>
                                        <Line>
                                            if <I>a' = a</I> then
                                        </Line>
                                        <Line depth={1}>
                                            <I>p</I>
                                        </Line>
                                        <Line>
                                            else
                                        </Line>
                                        <Line depth={1}>
                                            <I>getPriority(P,a')</I>
                                        </Line>
                                    </MultiLine>
                                </Observation>
                                <Observation>
                                    <I>first(P')</I>
                                    <I>error</I>
                                    <MultiLine>
                                        <Line>
                                            if <I>size(P) = 0</I> then
                                        </Line>
                                        <Line depth={1}>
                                            <I>a</I>
                                        </Line>
                                        <Line>
                                            else
                                        </Line>
                                        <Line depth={1}>
                                            if <I>p \leq first(P)</I> then
                                        </Line>
                                        <Line depth={2}>
                                            <I>a</I>
                                        </Line>
                                        <Line depth={1}>
                                            else
                                        </Line>
                                        <Line depth={2}>
                                            <I>first(P)</I>
                                        </Line>
                                    </MultiLine>
                                </Observation>
                                <Observation>
                                    <I>delFirst(P')</I>
                                    <I>error</I>
                                    <MultiLine>
                                        <Line>
                                            if <I>a = first(P')</I> then
                                        </Line>
                                        <Line depth={1}>
                                            <I>P</I>
                                        </Line>
                                        <Line>
                                            else
                                        </Line>
                                        <Line depth={1}>
                                            <I>delFirst(P)</I>
                                        </Line>
                                    </MultiLine>
                                </Observation>
                                <Observation>
                                    <I>changePriority(P',a',p')</I>
                                    <I>error</I>
                                    <MultiLine>
                                        <Line>
                                            if <I>a'=a</I> then
                                        </Line>
                                        <Line depth={1}>
                                            <I>insert(P,a,p')</I>
                                        </Line>
                                        <Line>
                                            else
                                        </Line>
                                        <Line depth={1}>
                                            <I>insert(changePriority(P,a',p'),a,p)</I>
                                        </Line>
                                    </MultiLine>
                                </Observation>
                                <Observation>
                                    <I>size(P')</I>
                                    <I>0</I>
                                    <I>1 + size(P)</I>
                                </Observation>
                                <Observation>
                                    <I>equal(P',P'')</I>
                                    <I>isNew(P'')</I>
                                    <MultiLine>
                                        <Line>
                                            if <I>isNew(P')</I> then
                                        </Line>
                                        <Line depth={1}>
                                            <I>false</I>
                                        </Line>
                                        <Line>
                                            else
                                        </Line>
                                        <Line depth={1}>
                                            if <I>first(P') = first(P'')</I> then
                                        </Line>
                                        <Line depth={2}>
                                            <I>equal(delFirst(P'), delFirst(P''))</I>
                                        </Line>
                                        <Line depth={1}>
                                            else
                                        </Line>
                                        <Line depth={2}>
                                            <I>false</I>
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
