using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace BiribinhaMemoryGame
{
	public class GameController : MonoBehaviour
	{
		public static GameController Instance;

		[Header("Phases Settings")]
		[SerializeField] private int _currentPhase = 1;
		[SerializeField] private List<PhaseData> _phases;

		[Header("Gameplay")]
		[SerializeField] private GameObject _prefabCard;
		[SerializeField] private GridLayoutGroup _gridParent;
		[SerializeField] private List<int> _cardsOpened = new List<int>();


		[Header("UI")]
		[SerializeField] private TMP_Text _textMaxAmountEachCard;
		private int _currentAmountEachCard;

		private List<Card> _cardsInstantiate = new List<Card>();
		private Action _onCheckCards;

		public Action OnResetCard;

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
			InstantiateCards();
		}

		private PhaseData GetCurrentPhase()
		{
			return _phases.FirstOrDefault(p => p.ID == _currentPhase);
		}

		private void InstantiateCards()
		{
			var phase = GetCurrentPhase();

			_currentAmountEachCard = phase.MaxAmountEachCard;
			_textMaxAmountEachCard.text = _currentAmountEachCard.ToString();

			_gridParent.cellSize = phase.SizeGrid;

			var cardsData = phase.Cards;
			for (int j = 0; j < phase.MaxAmountEachCard; j++)
			{
				for (int i = 0; i < cardsData.Count; i++)
				{
					var data = cardsData[i];
					var card = Instantiate(_prefabCard, _gridParent.transform.position, Quaternion.identity).GetComponent<Card>();
					card.transform.SetParent(_gridParent.transform);
					var size = new Vector3(phase.SizeGrid.x - phase.MarginCard,
						phase.SizeGrid.y - phase.MarginCard);
					card.Setup(data, size, phase.FontSize);
					card.OnShow += AddCardsOpened;
					_cardsInstantiate.Add(card);
				}
			}

			_onCheckCards += CheckCards;
		}

		private void AddCardsOpened(int id)
		{
			_cardsOpened.Add(id);
			_onCheckCards?.Invoke();
		}

		private void CheckCards()
		{
			var phase = GetCurrentPhase();
			_currentAmountEachCard--;
			_textMaxAmountEachCard.text = _currentAmountEachCard.ToString();

			if (phase == null) return;

			if (phase.MaxAmountEachCard > 2 && _cardsOpened.Count == 2)
			{
				var value = _cardsOpened.First();
				if (!_cardsOpened.All(c => c == value))
				{
					//OnResetCard?.Invoke();
					StartCoroutine(CoroutineOnResetCard());
					_cardsOpened.Clear();
					return;
				}
			}

			if (_cardsOpened.Count == phase.MaxAmountEachCard)
			{
				var value = _cardsOpened.First();
				if (_cardsOpened.All(c => c == value))
				{
					var cards = _cardsInstantiate.Where(t => t.ID == value).ToList();

					for (int i = 0; i < cards.Count; i++)
					{
						var card = cards[i];
						card.SetIsOpened(true);
					}

					ResetCurrentAmountEachCard();
				}
				else
				{
					StartCoroutine(CoroutineOnResetCard());
				}

				_cardsOpened.Clear();

				if (_cardsInstantiate.All(c => c.IsOpened))
				{
					StartCoroutine(NextPhase());
				}
			}
		}

		private IEnumerator CoroutineOnResetCard()
		{
			yield return new WaitForSeconds(1.2f);
			OnResetCard?.Invoke();

			yield return new WaitForSeconds(0.5f);
			ResetCurrentAmountEachCard();
		}

		private void ResetCurrentAmountEachCard()
		{
			var phase = GetCurrentPhase();
			_currentAmountEachCard = phase.MaxAmountEachCard;
			_textMaxAmountEachCard.text = _currentAmountEachCard.ToString();
		}

		private IEnumerator NextPhase()
		{
			_currentPhase++;

			yield return new WaitForSeconds(2f);

			for (int i = 0; i < _cardsInstantiate.Count; i++)
			{
				Destroy(_cardsInstantiate[i].gameObject);
			}

			_cardsInstantiate.Clear();

			//yield return new WaitForSeconds(2f);
			InstantiateCards();
		}
	}
}
//<a href="https://www.flaticon.com/free-icons/square" title="square icons">Square icons created by Creatype - Flaticon</a>