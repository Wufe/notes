import java.util.Random;

import javax.print.attribute.standard.Compression;


public class OrdinaArrayObject {

	/*
	 * Algoritmo bubblesort per l'ordinamento di un array di oggetti A
	 * per iquali sia definita una relazione d'ordine totale "<="
	 * @param A
	 */
	static void bubblesort(Comparable A[]){
		// DA IMPLEMENTARE
		
	}
	
			
	/*
	 * Stampa gli elementi contenuti nell'array A
	 * @param A
	 */
	static void stampaArray(Object A[]){
		int i;
		for(i=0;i<A.length;i++)
			System.out.println(A[i]);
	}
	
	public static void main(String args[])
	{
		
		String A[]= { "Malerba Donato", "Appice Annalisa", "Ceci Michelangelo", "Visaggio Giuseppe", "Fanelli Anna Maria", "Plantamura Vito Leonardo", "Plantamura Paola", "Malerba Donato" };
		

		stampaArray(A);
		System.out.println("Ordinamento");
		bubblesort(A);
		stampaArray(A);

		Integer B[]= { 3, 5, 12, 3, 3, 5, 7, 1 };
		
		stampaArray(B);
		System.out.println("Ordinamento");
		bubblesort(B);
		stampaArray(B);
	}
	
	
}
