const allSeats = document.getElementById('allSeats')
const seatButton = document.getElementsByClassName('seatButton')
const appendedSection = document.getElementById('appended-section')
const apply = document.getElementById('apply')
const visiblePopup = document.getElementById('success-popup')


let updateTotalPrice = 0
let seatCount = 0
let isSelected = false
let isTyped = false

for (const seat of seatButton) {
    seat.addEventListener('click', function () {
        if (seatCount < 4) {
            seat.classList.add('btnBgColorChanged')
            seat.classList.add('text-white')
            seat.classList.remove('bg-[#F7F8F8]')
            seat.setAttribute('disabled', '')

            seatCount = seatCount + 1
            setInnerTextWithIdAndValue('selected-seat-count', seatCount)

            const remainingSeat = getInnerTextValueFromId('remaining-seat')
            const updatedRemainingSeat = remainingSeat - 1
            setInnerTextWithIdAndValue('remaining-seat', updatedRemainingSeat)

            const div = document.createElement('div')
            div.classList.add("my-2", "flex", "justify-between", "text-[rgba(3,7,18,0.6)]")

            const ticketPricePerSeat = getInnerTextValueFromId('ticket-price-per-seat')
            const p1 = document.createElement('p')
            const seatText = seat.innerText
            p1.innerText = seatText;

            const p2 = document.createElement('p')
            p2.innerText = 'Economy';

            const p3 = document.createElement('p')
            p3.innerText = ticketPricePerSeat;
            div.append(p1, p2, p3)
            appendedSection.appendChild(div)


            updateTotalPrice = seatCount * ticketPricePerSeat
            setInnerTextWithIdAndValue('total-price', updateTotalPrice)
            const grandFinal = updateTotalPrice
            setInnerTextWithIdAndValue('grand-total', grandFinal)

            isSelected = true

            if (seatCount === 4) {
                apply.removeAttribute('disabled')
            }
            else {
                apply.setAttribute('disabled', true)
            }
        }
        else {
            alert("You can't select more seat!!!")
        }
    })
}

