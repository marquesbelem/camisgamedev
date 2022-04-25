using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

namespace BalloonGame
{
	public class GameManager : MonoBehaviour
	{
		public static GameManager Instance;

		[Header("Gameplay")]
		[SerializeField] private List<BalloonData> _balloonsData;
		[SerializeField] private List<GameObject> _targets;
		[SerializeField] private GameObject _prefabBalloon;
		[SerializeField] private Balloon _balloonInstance;
		[SerializeField] private Dart _dart;

		[Header("Score")]
		[SerializeField] private int _score;
		[SerializeField] private TMP_Text _textScore;
		[SerializeField] private int _bestScore;

		[Header("Phase")]
		[SerializeField] private float _incrementSpeed = 0.5f;
		[SerializeField] private GameObject _panelGameOver;
		[SerializeField] private TMP_Text _textBestScore;
		[SerializeField] private GameObject _panelTutorial;

		[Header("Sound")]
		[SerializeField] private AudioSource _audioSource;
		[SerializeField] private AudioClip _clipError;
		[SerializeField] private AudioClip _clipRight;
		[SerializeField] private AudioClip _clipDartInTarget;

		[Header("Heart")]
		[SerializeField] private GameObject _prefabHeart;
		[SerializeField] private int _currentHeart;
		[SerializeField] private Transform _parentHeart;
		[SerializeField] private List<Heart> _hearts;

		private Coroutine _coroutine;

		private void Awake()
		{
			if (Instance == null)
			{
				Instance = this;
			}
			else
			{
				Destroy(gameObject);
			}
		}

		void Start()
		{
			_panelTutorial.SetActive(true);
			_panelGameOver.SetActive(false);
			_dart.gameObject.SetActive(false);
		}

		public void OnStartGame()
		{
			_panelTutorial.gameObject.SetActive(false);
			_dart.gameObject.SetActive(true);
			_dart.OnStopMovement += CheckRight;
			_textScore.text = _score.ToString();
			StartCoroutine(InstantiateBalloon());

			InstantiateHearts();
		}

		private void InstantiateHearts()
		{
			for (int i = 0; i < _currentHeart; i++)
			{
				var heart = Instantiate(_prefabHeart, _parentHeart);
				heart.transform.SetParent(_parentHeart);
				_hearts.Add(heart.GetComponent<Heart>());
			}
		}

		private void DestroyHearts()
		{
			for (int i = 0; i < _hearts.Count; i++)
			{
				Destroy(_hearts[i].gameObject);
			}

			_hearts.Clear();
		}

		private IEnumerator InstantiateBalloon()
		{
			var indexData = GetRandomByScore(_balloonsData.Count);
			var indexTarget = Random.Range(0, _targets.Count);

			yield return new WaitForSeconds(0.5f);

			_balloonInstance = Instantiate(_prefabBalloon, _targets[indexTarget].transform.position, Quaternion.identity).GetComponent<Balloon>();
			_balloonInstance.Setup(_balloonsData[indexData]);
			_coroutine = null;
		}

		private void CheckRight()
		{
			_audioSource.clip = _clipError;

			if (_balloonInstance == null && _coroutine == null)
			{
				Error();
				NextBalloon();
				return;
			}

			if (_coroutine != null)
			{
				_dart.ResetState(_incrementSpeed);

				_audioSource.Play();
				return;
			}

			var dartPositionRound = new Vector3(Mathf.Round(_dart.transform.position.x), Mathf.Round(_dart.transform.position.y), 0);
			var balloonPositionRound = new Vector3(Mathf.Round(_balloonInstance.transform.position.x), Mathf.Round(_balloonInstance.transform.position.y), 0);

			if (balloonPositionRound == dartPositionRound)
			{
				_score += _balloonInstance.Data.Score;
				_textScore.text = _score.ToString();

				GainHeart();

				_dart.ResetState(_incrementSpeed - 0.2f);
				_audioSource.clip = _clipRight;
			}
			else
			{
				Error();
			}

			NextBalloon();
		}

		private void NextBalloon()
		{
			Destroy(_balloonInstance.gameObject);
			_audioSource.Play();

			_balloonInstance = null;

			_dart.ResetState(_incrementSpeed);

			_coroutine = StartCoroutine(InstantiateBalloon());
		}

		private int GetRandomByScore(int maxRange)
		{
			var index = 0;

			if (_score <= 50)
			{
				index = Random.Range(0, maxRange - 2);
			}
			else if (_score > 50 && _score <= 500)
			{
				index = Random.Range(0, maxRange - 1);
			}
			else
			{
				index = Random.Range(0, maxRange);
			}

			return index;
		}

		private void GainHeart()
		{
			if (_score == 20)
			{
				_currentHeart = 3;
			}
			else if (_score == 100)
			{
				_currentHeart = 4;
			}

			if (_score == 20 || _score == 100)
			{
				DestroyHearts();
				InstantiateHearts();
			}
		}

		private void Error()
		{
			_hearts[_currentHeart - 1].EnableClose(true);
			_currentHeart--;

			if (_currentHeart <= 0)
			{
				ChgeckBestScore();

				_panelGameOver.SetActive(true);
				_dart.gameObject.SetActive(false);
				StopAllCoroutines();
				_coroutine = null;
			}
		}

		public void ResetGame()
		{
			Destroy(_balloonInstance.gameObject);
			_balloonInstance = null;

			_panelGameOver.SetActive(false);
			_dart.gameObject.SetActive(true);
			_dart.ResetSpeed();

			_score = 0;
			_currentHeart = 2;

			DestroyHearts();
			InstantiateHearts();

			_textScore.text = _score.ToString();
			StartCoroutine(InstantiateBalloon());
		}

		private void ChgeckBestScore()
		{
			if (_score > _bestScore)
			{
				_bestScore = _score;
				_textBestScore.text = _bestScore.ToString();
			}
		}

		public void PlaySoundDart()
		{
			_audioSource.clip = _clipDartInTarget;
			_audioSource.Play();
		}

		public void Update()
		{
			if (Input.GetKeyDown(KeyCode.Space) && _panelTutorial.activeSelf)
			{
				_panelTutorial.SetActive(false);
				OnStartGame();
			}

			if (Input.GetKeyDown(KeyCode.Space) && _panelGameOver.activeSelf)
			{
				ResetGame();
			}
		}
	}
}