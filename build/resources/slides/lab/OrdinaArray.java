public class OrdinaArray {

	/*
	 * Algoritmo bubblesort per l'ordinamento di un array di interi A
	 * usando come relazione d'ordine totale "<="
	 * @param A
	 */
	static int bubblesort(int A[]){ 
		int numeroConfronti=0;
		// to do
		return numeroConfronti;
	}
	
	
	/*
	 * Inizializza l'array di interi A con numeri interi generati in maniera casuale 
	 * con valore tra 1 e A.length
	 * @param A
	 */
	static void inizializzaArrayCasuale(int A[]){
		// to do
	}
	
	/*
	 * Inizializza l'array di interi A con i numeri interi 1, 2, 3,..., A.length
	 * @param A
	 */
	static void inizializzaArrayCrescente(int A[]){
		// to do
	}
	/*
	 * Inizializza l'array di interi A con numeri interi A.length, A.length-1,...,2, 1
	 * @param A
	 */
	static void inizializzaArrayDecrescente(int A[]){
		// to do
	}
	

	/*
	 * Stampa gli elementi contenuti nell'array A
	 * @param A
	 */
	static void stampaArray(int A[]){
		// to do
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int i, maxDim, step;
		int contatore;
		maxDim=new Integer(args[0]).intValue();
		step=new Integer(args[1]).intValue();
		
		for(i=step; i<=maxDim; i+=step)
		{
			int A[]=new int[i];
			System.out.println("Array di dimensione " + i);
			System.out.println("***************************************************");
			System.out.println("Uso del generatore di numeri casuali");
			inizializzaArrayCasuale(A);
			stampaArray(A);
			contatore=bubblesort(A);
			System.out.print(": " + contatore + " confronti per ottenere ");
			stampaArray(A);
			System.out.println("");
			inizializzaArrayCrescente(A);
			stampaArray(A);
			contatore=bubblesort(A);
			System.out.print(": " + contatore + " confronti per ottenere ");
			stampaArray(A);
			System.out.println("");
			inizializzaArrayDecrescente(A);
			stampaArray(A);
			contatore=bubblesort(A);
			System.out.print(": " + contatore + " confronti per ottenere ");
			stampaArray(A);
			System.out.println("");
		}
	}
		
		


}
