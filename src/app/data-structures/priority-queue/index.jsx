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
                name="Coda con priorità"
                file="Scritto20160118.pdf">
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
                                Ogni <I>P \in</I>{MC.MATHCAL_P} è una sequenza <I>&lt;(p_0,a_0), ..., (p_n,a_0)&gt;</I>, <I>n \geq 0</I>, <br />
                                ogni elemento cioè, è una coppia <I math="(p,a) \in \mathbb{N} \times I" />.<br />
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
                                    <I>a \notin P</I>
                                </Pre>
                                <Post>
                                    <I>P' = &lt;(p,a)&gt;</I> se <I>P = \Lambda</I>;
                                    <Line depth={2}>
                                        <I>P' = &lt;(p_0,a_0),...,(p_n,a_n),(p,a)&gt;</I> se <I>p_n \leq p</I>;
                                    </Line>
                                    <Line depth={2}>
                                        <I>P' = &lt;(p_0,a_0),...,(p_i,a_i),(p,a),(p_j,a_j),...,(p_n,a_n)&gt;</I> se
                                        <I>\exists i,j \in [0,n]</I> t.c. <I>p_i \leq p &lt; p_j</I>;
                                    </Line>
                                    <Line depth={2}>
                                        <I>P' = &lt;(p,a),(p_0,a_0),...,(p_n,a_n)&gt;</I> altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>getPriority(P,a) = p</I>
                                </Function>
                                <Pre>
                                    <I>P = &lt;(p_0,a_0),...,(p_n,a_n)&gt;, n \geq 0</I>
                                    <I>\wedge</I>
                                    <I>\exists i \in [0,n]</I> t.c. <I>(p_i,a) \in P</I>
                                </Pre>
                                <Post>
                                    <I>p = p_i</I>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>first(P) = a</I>
                                </Function>
                                <Pre>
                                    <I>P = &lt;(p_0,a_0),...,(p_n,a_n)&gt;, n \geq 0</I>
                                </Pre>
                                <Post>
                                    <I>a = a_0</I>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>delFirst(P) = P'</I>
                                </Function>
                                <Pre>
                                    <I>P = &lt;(p_0,a_0),(p_1,a_1),...,(p_n,a_n)&gt;, n \geq 0</I>
                                </Pre>
                                <Post>
                                    <I>P' = \Lambda</I> se <I>n=1</I>;
                                    <Line depth={2}>
                                        <I>P' = &lt;(p_1,a_1),...,(p_n,a_n)&gt;</I> altrimenti.
                                    </Line>
                                </Post>
                            </Operator>
                            <Operator>
                                <Function>
                                    <I>changePriority(P,a,p) = P'</I>
                                </Function>
                                <Pre>
                                    <I>P = &lt;(p_0,a_0),...,(p_n,a_n)&gt;, n \geq 0</I>
                                    <I>\wedge</I>
                                    <I>\exists i \in [0,n]</I> t.c. <I>(p_i,a) \in P</I>
                                </Pre>
                                <Post>
                                    <I>P' = &lt;(p,a),(p_1,a_1),...,(p_n,a_2)&gt;</I> se <I>i = 0</I>;
                                    <Line depth={2}>
                                        <I math="P' = <(p_0,a_0),...,(p_{n-1},a_{n-1}),(p,a)>" /> se <I>i = n</I>;
                                    </Line>
                                    <Line depth={2}>
                                        <I math="P' = <(p_0,a_0),...,(p_{i-1},a_{i-1}),(p,a),(p_{i+1},a_{i+1}),...,(p_n,a_n)>" /> altrimenti.
                                    </Line>
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
                                    <I>(P = \Lambda \vee P = &lt;(p_0,a_0),...,(p_n,a_n)&gt;, n \geq 0)</I>
                                    <I>\wedge</I>;
                                    <Line depth={2}>
                                        <I>(P' = \Lambda \vee P' = &lt;(p'_0,a'_0),...,(p'_m,a'_m)&gt;, m \geq 0)</I>
                                    </Line>
                                </Pre>
                                <Post>
                                    <I>b = vero</I> se
                                    <Line depth={2}>
                                        <I>(\forall i \in [1,n]</I><I>\exists j \in [1,m]</I> t.c. <I>p_i = p'_j</I><I>\wedge</I><I>a_i = a'_j)</I> <I>\wedge</I>
                                    </Line>
                                    <Line depth={2}>
                                        <I>(\forall j \in [1,m]</I><I>\exists i \in [1,n]</I> t.c. <I>p'_j = p_i</I><I>\wedge</I><I>a'_j = a_i)</I>;
                                    </Line>
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
                        <Comment>
                            Per la sorta item è definito l'operatore infisso:<br />
                            <I>= : item \times item \rightarrow boolean</I> che predica se due item sono uguali.
                        </Comment>
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
                                            <I>insert(delFirst(P),a,p)</I>
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
