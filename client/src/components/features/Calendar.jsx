import "./Calendar.css";
import {
  FaCalendarAlt,
  FaClock,
  FaBell,
  FaArrowRight,
} from "react-icons/fa";

/**
 * Displays the Calendar feature section.
 *
 * @returns {JSX.Element}
 */
function Calendar() {
  return (
    <section className="calendar-feature">

      <div className="calendar-container">

        <div className="calendar-preview">

          <div className="calendar-window">

            <div className="calendar-header">

              <span className="calendar-dot red"></span>
              <span className="calendar-dot yellow"></span>
              <span className="calendar-dot green"></span>

            </div>

            <div className="calendar-body">

              <div className="calendar-top">

                <h4>July 2026</h4>

                <span>Today</span>

              </div>

              <div className="weekdays">

                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
                <span>Su</span>

              </div>

              <div className="calendar-grid">

                <span>13</span>
                <span>14</span>
                <span className="active-day">15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>

                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>

              </div>

              <div className="calendar-events">

                <h5>Today's Events</h5>

                <div className="event-card">

                  <div className="event-dot"></div>

                  <div>

                    <strong>Team Meeting</strong>

                    <small>10:00 AM</small>

                  </div>

                </div>

                <div className="event-card">

                  <div className="event-dot purple"></div>

                  <div>

                    <strong>Workout</strong>

                    <small>6:00 PM</small>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="calendar-content">

          <span className="calendar-badge">
            SMART CALENDAR
          </span>

          <h2>
            Never Miss
            <span> An Important Day.</span>
          </h2>

          <p>
            Organize your schedule with an elegant calendar that
            helps you manage events, appointments, deadlines,
            meetings, and reminders from one place.
          </p>

          <div className="calendar-list">

            <div className="calendar-item">
              <FaCalendarAlt />
              <span>Monthly & weekly calendar views</span>
            </div>

            <div className="calendar-item">
              <FaClock />
              <span>Schedule meetings and events</span>
            </div>

            <div className="calendar-item">
              <FaBell />
              <span>Receive reminders before events</span>
            </div>

          </div>

          <button className="calendar-btn">

            Learn More

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
}

export default Calendar;