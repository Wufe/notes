public class PilaArray implements Pila {


	private Object[] S = new Object[1];

	private int n = 0;

	public boolean isEmpty() {
		return n == 0;
	}

	public void push(Object e) {
		if (n == S.length) {
			Object[] temp = new Object[2 * S.length];
			for (int i = 0; i < n; i++) temp[i] = S[i];
			S = temp;
		}
		S[n] = e;
		n = n + 1;
	}

	public Object top() {}

	public void pop() {}		

}