using UnityEngine;
using System.Collections;

public class WorkersPanelController : MonoBehaviour {

    public GameObject panel;
    public Object WorkerFrame;

    // Use this for initialization
    void Start () {
        Worker test = new Worker("testingo");
        Vector2 mainV = new Vector2(0, 0);
        GameObject a = Instantiate(WorkerFrame, mainV, Quaternion.identity) as GameObject;
        a.transform.SetParent(panel.transform);
    }
	
	void FixedUpdate () {
	    
	}
}
