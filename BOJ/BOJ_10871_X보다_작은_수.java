import java.io.IOException;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {

	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		StringTokenizer st;
		
		st = new StringTokenizer(br.readLine());
		int count = Integer.parseInt(st.nextToken());
		int theNum = Integer.parseInt(st.nextToken());
		
		st = new StringTokenizer(br.readLine());
		int[] nums = new int[count];
		for(int i=0; i<count; i++) {
			nums[i] = Integer.parseInt(st.nextToken());
		}
		
		for(int i=0; i<count; i++) {
			if(nums[i] < theNum) {
				bw.write(nums[i] + " ");
			}
		}
		bw.close();
	}

}
