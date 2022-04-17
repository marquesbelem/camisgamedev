using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class Dart : MonoBehaviour
{
	[SerializeField] private float _speed;
	[SerializeField] private float _maxSpeed; 
	[SerializeField] private Transform _target;
	[SerializeField] private bool _stop = false;
	public Action OnStopMovement; 

	void Update()
	{
		if (_stop) return;

		var speed = _speed * Time.deltaTime; 
		transform.position = Vector3.MoveTowards(transform.position, _target.position, speed);

		if (Vector3.Distance(transform.position, _target.position) < 0.001f)
		{
			GameManager.Instance.PlaySoundDart();
			_target.position *= -1.0f;
		}

		if(Input.GetKeyDown(KeyCode.Space))
		{
			_stop = true;
			OnStopMovement?.Invoke();
		}
	}

	public void ResetState(float increment)
	{
		//transform.position = Vector3.zero;
		_stop = false;
		if(_speed < _maxSpeed)
			_speed += increment;
	}

	public void ResetSpeed()
	{
		_speed = 2.5f;
	}
}
